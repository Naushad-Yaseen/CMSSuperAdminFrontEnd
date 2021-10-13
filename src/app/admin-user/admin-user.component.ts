import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../comman/services/admin-user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  AdminUsersList: any;
  constructor(private adminUserService: AdminUserService) { }
  displayedColumns: string[] = ['profilepic', 'adminName', 'username', 'email', 'contactNumber', 'roleName', 'actions'];

  ngOnInit(): void {
    debugger;
    this.getAllAdminUsers();
  }
  getAllAdminUsers() {
    this.adminUserService.getAdminUserLIst().subscribe((res: any) => {
      this.AdminUsersList = res.responseData;
     console.log('AdminUsersList', this.AdminUsersList);

    });
    //console.log('AdminUsersList', this.AdminUsersList);
  }
  maxDate = new Date();
}
