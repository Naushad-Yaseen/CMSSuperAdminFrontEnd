import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
// import { User } from 'src/app/_model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }
  login(data: any) {
    return this.http.post<any>('http://localhost:17808/api/Organization/Login', data)
      .pipe(
        map((response: any) => {
          console.log("response", response);
          const user = response.responseData;
          if (user) {
            this.setCurrentUser(user);
          }
        })
      )
  }

  setCurrentUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
}
