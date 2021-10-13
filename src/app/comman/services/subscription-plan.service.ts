import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, siteSubscriptionPlan } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {

  constructor(private http: HttpClient) { }
  AddSubscriptionPlan(data: any) {
    return this.http.post(`${environment.baseUrl}${siteSubscriptionPlan.addSubscriptionPlanAPI}`, data);
  }

  // AllSubscriptionPlan() {
  //   return this.http.get(`${environment.baseUrl}${siteSubscriptionPlan.allSubscriptionPlanAPI}`);
  // }
  getSubscriptionPlanList() {
    return this.http.get(`${environment.baseUrl}${siteSubscriptionPlan.allSubscriptionPlanAPI}`);
    // return this.http.get("https://localhost:44390/api/SubscriptionPlan/GetSubscriptionPlanList")
  }

  GetSubscriptionPlanById(Id: any) {
    debugger;
    return this.http.get(`${environment.baseUrl}${siteSubscriptionPlan.getSubscriptionPlanByIdAPI}${'?id=' + Id}`);
  }

  UpdateSubscriptionPlan(data: any) {
    debugger;
    return this.http.post(`${environment.baseUrl}${siteSubscriptionPlan.updateSubscriptionPlanAPI}`, data);
  }

  DeleteSubscriptionPlan(Id: any) {
    debugger;
    return this.http.delete(`${environment.baseUrl}${siteSubscriptionPlan.deleteSubscriptionPlanAPI}${'?id=' + Id}`);
  }
}
