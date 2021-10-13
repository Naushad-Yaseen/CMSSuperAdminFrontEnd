import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ManageOrganizationService } from 'src/app/comman/services/manage-organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  OrganizationList: any;

  constructor(private organizationService: ManageOrganizationService, private dialog: MatDialog,) { }
  displayedColumns: string[] = ['organizationname', 'contactPersonFullName',
    'organizationtype', 'email', 'subdomainname', 'username', 'contactno', 'actions'];

  ngOnInit(): void {
    this.getOrganizationList();
  }

  getOrganizationList() {
    this.organizationService.getOrganizationList().subscribe((res: any) => {
      this.OrganizationList = res.responseData;
      console.log("OrganizationList", this.OrganizationList);

    })
    //  console.log("OrganizationList", this.OrganizationList);    //never take console here
  }
  // deleteId: any;
  // actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
  //   this.dialog.open(templateRef, { data: id });
  //   this.deleteId = id;
  // }
  deleteId:any;
  actionDialogPopup(templateRef: TemplateRef<any>,id:any) {
    this.dialog.open(templateRef,{
      data:id

    });
    this.deleteId = id;
    console.log('actionDialogPopup',this.deleteId);
    
  }
  confirmDelete(){
    this.organizationService.deleteOrganization( this.deleteId).subscribe((res: any) => {
     
    })
  }
  // deleteOrganization(id:any) {
  //   debugger;
   
  //   this.organizationService.deleteOrganization(id).subscribe((res: any) => {
     
  //   })
  // }

}
