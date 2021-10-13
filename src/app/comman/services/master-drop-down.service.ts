import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminUsers, environment, masters } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterDropDownService {

  constructor(private http: HttpClient) { }

  GetPlanTypeDropdown() {
    return this.http.get(`${environment.baseUrl}${masters.getPlanTypeDropdown}`);
  }

  GetPlanTypestausDropdown() {
    return this.http.get(`${environment.baseUrl}${masters.getPlanTypeStatusDropdown}`);
  }
  getCountryDropdown() {
    return this.http.get(`${environment.baseUrl}${masters.getCountryDropdown}`)
  }
  getEmailSubscriptionPlanDropdown() {
    return this.http.get(`${environment.baseUrl}${masters.getEmailSubscriptionPlanDropdown}`)
  }
  selectNumberOfStudentsDropDown() {
    return this.http.get(`${environment.baseUrl}${masters.selectNumberOfStudentsDropDown}`)
  }
  getOrganizationTypeDropdown() {
    return this.http.get(`${environment.baseUrl}${masters.getOrganizationTypeDropdown}`)
  }
  
  SelectSMSSubscriptionPlanDropDown() {
    return this.http.get(`${environment.baseUrl}${masters.SelectSMSSubscriptionPlanDropDown}`)
  }
  SelectStatusDropDown() {
    return this.http.get(`${environment.baseUrl}${masters.SelectStatusDropDown}`)
  }
  GetRoleDropDown() {
    return this.http.get(`${environment.baseUrl}${adminUsers.GetRoleDropDownAPI}`)
  }
  getStateDropDown() {
    return this.http.get(`${environment.baseUrl}${adminUsers.getStateDropDownAPI}`)
  }
  getBloodGroupDropdown() {
    return this.http.get(`${environment.baseUrl}${adminUsers.getBloodGroupDropdown}`)
  }

}
