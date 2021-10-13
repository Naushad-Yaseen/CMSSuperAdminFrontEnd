import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageOrganizationService } from 'src/app/comman/services/manage-organization.service';
import { MasterDropDownService } from 'src/app/comman/services/master-drop-down.service';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.css']
})
export class EditOrganizationComponent implements OnInit {
  OrganizationId: any;
  OrganizationById: any;
  form: FormGroup;
  isSubmitted: boolean;
  OrganizationTypeDropdown: any;
  NumberOfStudentsDropDown: any;
  CountryDropdown: any;
  EmailSubscriptionPlanDropdown: any;
  SMSSubscriptionPlanDropDown: any;
  StatusDropDown: any;
  planTypeDropdown: any;
  constructor(private activatedRoute: ActivatedRoute,
    private oerganizationService: ManageOrganizationService,
    private masterDropdownService: MasterDropDownService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
  ) { }

  ngOnInit(): void {
    this.OrganizationId = this.activatedRoute.snapshot.params.Id
    console.log("Id is", this.OrganizationId);
    debugger;
    this.form = this.formBuilder.group({
      organizationID:[0],
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
      subscriptionID: ['', Validators.required],
      emailSubscriptionPlanID: ['', Validators.required],
      smsSubscriptionPlanID: ['', Validators.required],

    });
   this.getOrganizationById();
   this.organizationDropdown();
  }

  getOrganizationById() {
    debugger;
    this.oerganizationService.getOrganizationById(this.OrganizationId).subscribe((res: any) => {
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

    });
  }
  onSubmit() {
    debugger;
    console.log('update organization', this.form.value);
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.oerganizationService.updateOrganization(this.form.value).subscribe((res: any) => {
        if (res.status > 0) {
          this.toaster.success(res.message);
        }
        else {
          this.toaster.error(res.message);
        }
      });
      this.form.reset();
      this.form.controls.organizationName.clearValidators();
      this.form.controls.organizationShortName.clearValidators();
      this.form.controls.contactPersonFullName.clearValidators();
      this.form.controls.email.clearValidators();
      this.form.controls.contactNumber.clearValidators();
      this.form.controls.contactNumberCountryCode.clearValidators();
      this.form.controls.userName.clearValidators();
      this.form.controls.password.clearValidators();
      this.form.controls.subDomainName.clearValidators();
      this.form.controls.organizationType.clearValidators();
      this.form.controls.maximumStudentAllowed.clearValidators();
      this.form.controls.connectionStringName.clearValidators();
      this.form.controls.organizationDatabaseName.clearValidators();
      this.form.controls.statusID.clearValidators();
      this.form.controls.subscriptionID.clearValidators();
      this.form.controls.emailSubscriptionPlanID.clearValidators();
      this.form.controls.smsSubscriptionPlanID.clearValidators();

    }
  }

  organizationDropdown() {
    this.masterDropdownService.getOrganizationTypeDropdown().subscribe((res: any) => {
      this.OrganizationTypeDropdown = res.responseData;
      console.log('OrganizationTypeDropdown', this.OrganizationTypeDropdown);
    });
    // this.masterDropDownService.selectNumberOfStudentsDropDown().subscribe((res:any)=>{
    // this.NumberOfStudentsDropDown=res.responseData;
    // console.log('NumberOfStudentsDropDown', this.NumberOfStudentsDropDown);
    // })
    // this.masterDropDownService.getCountryDropdown().subscribe((res:any)=>{
    // this.CountryDropdown=res.responseData;
    // console.log('CountryDropdown', this.CountryDropdown);
    // })
    this.masterDropdownService.getEmailSubscriptionPlanDropdown().subscribe((res: any) => {
      this.EmailSubscriptionPlanDropdown = res.responseData;
      console.log('EmailSubscriptionPlanDropdown', this.EmailSubscriptionPlanDropdown);
    })
    this.masterDropdownService.SelectSMSSubscriptionPlanDropDown().subscribe((res: any) => {
      this.SMSSubscriptionPlanDropDown = res.responseData;
      console.log('SMSSubscriptionPlanDropDown', this.SMSSubscriptionPlanDropDown);
    })
    this.masterDropdownService.SelectStatusDropDown().subscribe((res: any) => {
      this.StatusDropDown = res.responseData;
      console.log('StatusDropDown', this.StatusDropDown);
    })
    // this.masterDropDownService.GetPlanTypeDropdown().subscribe((res: any) => {
    //   this.planTypeDropdown = res.responseData;
    //   console.log('plan type drop down', this.planTypeDropdown);

    // });

  }

}
