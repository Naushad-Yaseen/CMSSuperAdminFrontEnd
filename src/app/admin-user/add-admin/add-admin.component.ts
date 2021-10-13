import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommanServiceService } from 'src/app/comman/core-services/comman-service.service';
import { AdminUserService } from 'src/app/comman/services/admin-user.service';
import { MasterDropDownService } from 'src/app/comman/services/master-drop-down.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  form: FormGroup;
  profileImage: string;
  toaster: any;
  router: any;
  RoleDropDown:any;
  CountryDropdown:any;
  StateDropDown:any;
  BloodGroupDropdown:any;
  constructor(private adminUserService: AdminUserService,
    private fb: FormBuilder,
    private masterDropDownService:MasterDropDownService,
    private commonService:CommanServiceService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      profilePic: ['', Validators.required],
      contactNumber: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      stateID: ['', Validators.required],
      countryID: ['', Validators.required],
      city: ['', Validators.required],
      bloodGroupID: ['', Validators.required],
      roleID: ['', Validators.required],
      //firstName:['',Validators.required],
    })
    this.masterDropDown()
  }
  onSubmit() {
    console.log('addAdminUser',this.form.value);
    if (this.form.invalid) {
      return;
    }
    else{
      this.adminUserService.addAdminUser(this.form.value).subscribe((res: any) => {
        console.log(res);
        if(res.status > 0){
          this.toaster.success(res.message, 'Success');
         // this.router.navigate(['/manage-staff']);
  
        }else{
          this.toaster.error(res.message, 'Error');
        }
        
  
      });
    }
    // if(this.profileImage != ''){
    //   this.form.controls.profilePic.setValue(this.profileImage);
    // }
 
  }
  masterDropDown()
  {
    this.masterDropDownService.GetRoleDropDown().subscribe((res:any)=>{
      this.RoleDropDown=res.responseData;
      console.log('RoleDropDown',this.RoleDropDown);
      
    });
    this.masterDropDownService.getCountryDropdown().subscribe((res:any)=>{
      this.CountryDropdown=res.responseData;
      console.log('CountryDropdown',this.CountryDropdown);
      
    });
    this.masterDropDownService.getStateDropDown().subscribe((res:any)=>{
      this.StateDropDown=res.responseData;
      console.log('StateDropDown',this.StateDropDown);
      
    });
    this.masterDropDownService.getBloodGroupDropdown().subscribe((res:any)=>{
      this.BloodGroupDropdown=res.responseData;
      console.log('BloodGroupDropdown',this.BloodGroupDropdown);
      
    });
  }
  allowOnlyNumber(event:any) {
    this.commonService.allowOnlyNumber(event);
  }

  allowAlphabetOnly(event:any) {
    this.commonService.allowAlphabetOnly(event);
  }
  maxDate = new Date();

}
