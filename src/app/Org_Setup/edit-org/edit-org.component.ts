import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrgService } from '../services/org.service';

@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.css']
})
export class EditOrgComponent implements OnInit {
  OrganizationId:number;
  form:FormGroup;
  OrganizationById:any;
  constructor(private activatedRoute:ActivatedRoute,
    private toaster: ToastrService,
    private fb:FormBuilder, private orgService:OrgService) { }

  ngOnInit(): void {
    this.OrganizationId = this.activatedRoute.snapshot.params.Id
    console.log("Id is", this.OrganizationId);

    this.form = this.fb.group({
      organizationID: ['', Validators.required],
      organizationName: ['', Validators.required],
      organizationShortName: ['', Validators.required],
      contactPersonFullName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      contactNumberCountryCode: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      subDomainName: ['', Validators.required],
      organizationType: ['', Validators.required],
      maximumStudentAllowed: ['', Validators.required],
      connectionStringName: ['', Validators.required],
      organizationDatabaseName: ['', Validators.required],
      statusID: ['', Validators.required],

    })
    this.getOrganizationById();
  }

  getOrganizationById() {
    debugger;
    this.orgService.getOrgById(this.OrganizationId).subscribe((res: any) => {
      this.OrganizationById = res.responseData;
      console.log('getOrganizationById', this.OrganizationById);
      this.form.patchValue({
        organizationID:res.responseData['organizationID'],
        organizationName:res.responseData['organizationName'],
        organizationShortName:res.responseData['organizationShortName'],
        contactPersonFullName:res.responseData['contactPersonFullName'],
        email:res.responseData['email'],
        contactNumber:res.responseData['contactNumber'],
        contactNumberCountryCode:res.responseData['contactNumberCountryCode'],
        userName:res.responseData['userName'],
        password:res.responseData['password'],
        subDomainName:res.responseData['subDomainName'],
        organizationType:res.responseData['organizationType'],
        maximumStudentAllowed:res.responseData['maximumStudentAllowed'],
        connectionStringName:res.responseData['connectionStringName'],
        organizationDatabaseName:res.responseData['organizationDatabaseName'],
        statusID:res.responseData['statusID'],
        subscriptionID:res.responseData['subscriptionID'],
        emailSubscriptionPlanID:res.responseData['emailSubscriptionPlanID'],
        smsSubscriptionPlanID:res.responseData['smsSubscriptionPlanID'],
      })
    })

  }

  onSubmit(){
    this.orgService.updateOrg(this.form.value).subscribe((res:any)=>{
      console.log('after submit',res);
      if (res.status > 0) {
        this.toaster.success(res.message);
      }
      else {
        this.toaster.error(res.message);
      }

    })

  }
}
