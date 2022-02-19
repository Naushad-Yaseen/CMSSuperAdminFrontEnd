import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http:HttpClient) { }
  addOrg(data:any)
  {
   return this.http.post('http://localhost:17808/api/Organization/createOrganization',data)
  }
  orgList()
  {
   return this.http.get('http://localhost:17808/api/Organization/GetOrganizationList')
  }
  getOrgById(id:any)
  {
   return this.http.get('http://localhost:17808/api/Organization/GetOrganizationById/'+id)
  }

  updateOrg(data:any)
  {
   return this.http.post('http://localhost:17808/api/Organization/updateOrganization',data)
  }
  changePassword(data:any)
  {
    return this.http.post('http://localhost:17808/api/Organization/changePassword',data)
  }
}
