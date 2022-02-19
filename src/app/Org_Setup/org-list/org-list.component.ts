import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/comman/core-services/login.service';
import { OrgService } from '../services/org.service';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {
  organizationList: any
  organizationId: number;
  resetObj: any
  resetPasswordForm: FormGroup;
  // form: FormGroup;
  constructor(private loginService: LoginService, private fb: FormBuilder, private toaster:ToastrService,
    private orgService: OrgService,
    private dialog: MatDialog,) { }
  displayedColumns: string[] = [
    'organizationname',
    'contactPersonFullName',
    'organizationshortname',
    'organizationtype',
    'email',
    'subdomainname',
    'username', 'contactno',
    'actions'
  ];
  ngOnInit(): void {

    this.GetorganizationList()
  }
  GetorganizationList() {
    this.orgService.orgList().subscribe((res: any) => {
      this.organizationList = res.responseData;
      console.log('organizationList', this.organizationList);
    })
  }

  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef);
    this.organizationId = id;
    console.log('id', this.organizationId);

    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.required]
    })

  }
  onSubmit() {
    console.log(' hi');
    this.resetObj = { organizationID: this.organizationId, newPassword: this.resetPasswordForm.controls.newPassword.value }
    console.log('before onSubmit', this.resetPasswordForm.value);
    this.orgService.changePassword(this.resetObj).subscribe((res: any) => {
      if(res.status>0){
        this.toaster.success(res.message);
      }else{
        this.toaster.error(res.message);
      }


    })
  }
  // actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
  //   this.dialog.open(templateRef)
  //   //  data: id,
  //   this.form = this.fb.group({
  //     newPassword: ['', Validators.required],
  //   })
  //   this.organizationId = id;
  //   this.resetObj = { organizationID: this.organizationId, newPassword: this.form.controls.newPassword.value }
  // }
  // changePassword() {
  //   // this.resetObj = { organizationID: this.organizationId, newPassword: this.form.controls.newPassword.value }
  //   console.log('before changePassword', this.resetObj);
  //   console.log('before changePassword', this.form.value);
  //   this.orgService.changePassword(this.resetObj).subscribe((res: any) => {

  //   })
  // }

  // getOrganizationById() {
  //   debugger;
  //   this.orgService.getOrgById(this.organizationId).subscribe((res: any) => {
  //     this.organizationId = res.responseData;
  //     console.log('getOrganizationById', this.organizationId);
  //     this.form.patchValue({
  //       organizationID: res.responseData['organizationID'],
  //       newPassword: res.responseData['password'],

  //     })
  //   })

  // }
}
