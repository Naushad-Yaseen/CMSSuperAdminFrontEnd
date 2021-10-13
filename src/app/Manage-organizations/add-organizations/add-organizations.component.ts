import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ManageOrganizationService } from 'src/app/comman/services/manage-organization.service';
import { MasterDropDownService } from 'src/app/comman/services/master-drop-down.service';

@Component({
  selector: 'app-add-organizations',
  templateUrl: './add-organizations.component.html',
  styleUrls: ['./add-organizations.component.css']
})
export class AddOrganizationsComponent implements OnInit {
  form: FormGroup;
  isSubmitted: boolean;
  OrganizationTypeDropdown: any;
  NumberOfStudentsDropDown: any;
  CountryDropdown: any;
  EmailSubscriptionPlanDropdown: any;
  SMSSubscriptionPlanDropDown: any;
  StatusDropDown: any;
  planTypeDropdown: any;
  addOrgDetailsObject: any;
  @ViewChild('phone') phone: any;
  constructor(private masterDropDownService: MasterDropDownService,
    private manageOrganizationService: ManageOrganizationService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    debugger;
    this.form = this.formBuilder.group({
      organizationName: ['', Validators.required],
      organizationShortName: ['', Validators.required],
      maximumStudentAllowed: ['', Validators.required],
      organizationType: ['', Validators.required],
      contactPersonFullName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      userName: ['', Validators.required],

      password: ['', Validators.required],
      subDomainName: ['', Validators.required],

      statusID: ['', Validators.required],

      emailSubscriptionPlanID: ['', Validators.required],
      smsSubscriptionPlanID: ['', Validators.required],

    });

    this.organizationDropdown();
  }
  // openSetupOrg(templateRef: TemplateRef<any>) {
  //   this.dialog.open(templateRef)
  // }

  registerOrgApiCall(successPopup: TemplateRef<any>) {
    this.addOrgDetailsObject = {};
    this.addOrgDetailsObject = this.form.value;
    this.addOrgDetailsObject.connectionStringName = "CMSConnectionString",
      this.addOrgDetailsObject.organizationDatabaseName = "CMSMasterDB3",
      this.addOrgDetailsObject.subscriptionID = 1,
      // this.addOrgDetailsObject.contactNumberCountryCode = this.phone.numberInstance.country;
      this.addOrgDetailsObject.contactNumberCountryCode = this.phone.numberInstance.countryCallingCode;
      this.addOrgDetailsObject.contactNumber=this.phone.phoneNumber
    // console.log('addOrgDetailsObject', this.addOrgDetailsObject);
    console.log('phone', this.phone);
    console.log('phone', this.phone.phoneNumber);
    this.manageOrganizationService.addOrganization(this.addOrgDetailsObject).subscribe((res: any) => {
      // this.form.reset();
      this.dialog.open(successPopup);
    });
    // debugger;
    // console.log('add organization', this.form.value);
    // this.isSubmitted = true;
    // if (this.form.invalid) {
    //   return;
    // }
    // else {
    //   this.manageOrganizationService.addOrganization(this.form.value).subscribe((res: any) => {
    //     if (res.status > 0) {
    //       this.toaster.success(res.message);
    //     }
    //     else {
    //       this.toaster.error(res.message);
    //     }
    //   });
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
    this.form.controls.statusID.clearValidators();
    this.form.controls.emailSubscriptionPlanID.clearValidators();
    this.form.controls.smsSubscriptionPlanID.clearValidators();

    // }
  }



  organizationDropdown() {
    this.masterDropDownService.getOrganizationTypeDropdown().subscribe((res: any) => {
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
    this.masterDropDownService.getEmailSubscriptionPlanDropdown().subscribe((res: any) => {
      this.EmailSubscriptionPlanDropdown = res.responseData;
      console.log('EmailSubscriptionPlanDropdown', this.EmailSubscriptionPlanDropdown);
    })
    this.masterDropDownService.SelectSMSSubscriptionPlanDropDown().subscribe((res: any) => {
      this.SMSSubscriptionPlanDropDown = res.responseData;
      console.log('SMSSubscriptionPlanDropDown', this.SMSSubscriptionPlanDropDown);
    })
    this.masterDropDownService.SelectStatusDropDown().subscribe((res: any) => {
      this.StatusDropDown = res.responseData;
      console.log('StatusDropDown', this.StatusDropDown);
    })
    // this.masterDropDownService.GetPlanTypeDropdown().subscribe((res: any) => {
    //   this.planTypeDropdown = res.responseData;
    //   console.log('plan type drop down', this.planTypeDropdown);

    // });

  }

}
