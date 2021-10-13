import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, organization } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageOrganizationService {

  constructor(private http: HttpClient) { }
  addOrganization(data: any) {
    debugger;
    return this.http.post(`${environment.baseUrl}${organization.addOrganizationAPI}`, data)
  }
  updateOrganization(data: any) {
    debugger;
    return this.http.post(`${environment.baseUrl}${organization.updateOrganizationAPI}`, data)
  }
  getOrganizationList() {
    debugger;
    return this.http.get(`${environment.baseUrl}${organization.getOrganizationListAPI}`)
  }
  getOrganizationById(Id: any) {
    debugger;
    return this.http.get(`${environment.baseUrl}${organization.getOrganizationByIdAPI}${'?id=' + Id}`);
  }
  deleteOrganization(Id: any) {
    debugger;
    return this.http.delete(`${environment.baseUrl}${organization.deleteOrganizationListAPI}${'?id=' + Id}`);
  }
}
environment