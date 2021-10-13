import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminUsers, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private http: HttpClient) { }

  getAdminUserLIst() {
    debugger;
    return this.http.get(`${environment.baseUrl}${adminUsers.alladminUsersAPI}`)
  }
  getAdminUserViewAPI() {
    debugger;
    return this.http.get(`${environment.baseUrl}${adminUsers.getAdminUserViewAPI}`)
  }

  addAdminUser(data: any) {
    debugger;
    return this.http.post(`${environment.baseUrl}${adminUsers.addStaffAPI}`, data)
  }
  GetAdminUserListById(Id:any)
  {
    return this.http.get(`${environment.baseUrl}${adminUsers.GetAdminUserListById}${'?id='+Id}`)
  }
  getAdminUserViewByIdAPI(Id:any)
  {
    return this.http.get(`${environment.baseUrl}${adminUsers.getAdminUserViewByIdAPI}${'?id='+Id}`)
  }
}
