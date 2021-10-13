import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emailTemplate, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {

  constructor(private http: HttpClient) { }

  allEmailTemplate() {
    debugger;
    return this.http.get(`${environment.baseUrl}${emailTemplate.allEmailTemplateAPI}`);
  }
  getEmailTemplateById(Id:any) {
    debugger;
    return this.http.get(`${environment.baseUrl}${emailTemplate.EmailTemplateByIdAPI}${'?id='+Id}`);
  }
  // getEmailTemplateById(Id:any) {
  //   debugger;
  //   return this.http.get(`${environment.baseUrl}${emailTemplate.EmailTemplateByIdAPI}${Id}`);
  // }
  updateEmailTemplate(data:any) {
    debugger;
    return this.http.post(`${environment.baseUrl}${emailTemplate.updateEmailTemplateAPI}`,data);
  }
}
