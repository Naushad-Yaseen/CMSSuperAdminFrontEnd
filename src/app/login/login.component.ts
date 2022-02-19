import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../comman/core-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  submit() {
    console.log('login', this.loginForm.value);

    this.loginService.login(this.loginForm.value).subscribe(response=>{
      console.log("res", response);
      this.router.navigate(['/dash'])

    })
    // this.loginService.login(this.loginForm.value).subscribe((response: any) => {
    //   console.log("response", response);

    //   this.router.navigate(['/dash'])
    // });
  }
}
