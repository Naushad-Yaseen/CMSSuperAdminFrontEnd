import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminUserService } from 'src/app/comman/services/admin-user.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  form: FormGroup;
  adminUserID:number;
  data:string;
  firstName:string;
  lastName:string;
  dob:any;
  genderName:string;
  username:string
  
   email: string
  password :string
    profilePic:string
    // staffModel:StaffModel
    contactNumber:string
    address:string
    zipCode:string
    stateName: string
    countryName: string
    city: string
    bloodGroupName: number;
    roleName:string

  constructor( private activatedRoute:ActivatedRoute,
    private adminUserService:AdminUserService
    ) { }

  ngOnInit(): void {
    this.adminUserID = this.activatedRoute.snapshot.params.Id
     this.adminUserService.getAdminUserViewByIdAPI(this.adminUserID).subscribe((res:any) => {
      this.firstName= res.responseData.firstName;
      this.lastName=res.responseData.lastName;
      this.dob=res.responseData.dob;
      this.genderName=res.responseData.genderName;
      this.username=res.responseData.username;
      this.email=res.responseData.email;
      this.password=res.responseData.password;
      this.profilePic=res.responseData.profilePic;
      this.contactNumber=res.responseData.contactNumber;
     
      this.address=res.responseData.address;
      this.city=res.responseData.city;
      this.countryName=res.responseData.countryName;
      this.stateName=res.responseData.stateName;
      this.roleName=res.responseData.roleName;
      this.zipCode=res.responseData.zipCode;
      this.bloodGroupName=res.responseData.bloodGroupName
     
      console.log('getAdminUserViewByIdAPI',res.responseData);
      

    });
  }

}
