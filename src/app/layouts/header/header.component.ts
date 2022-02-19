import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/comman/core-services/login.service';
import { User } from 'src/app/comman/Models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter();

  toggle:boolean = true;
  change(){
    this.toggle = !this.toggle;
  }

//  users:any;
  user : User;
 constructor(private router: Router, private loginService:LoginService ) {

  //  this.users = localStorage.getItem('currentUser');
  //  var currentUser = JSON.parse(this.users);
  //  if(currentUser!=null)
  //  {

  //    this.user = currentUser;


  //    console.log(this.user);

  //  }
  }


  ngOnInit(): void {
    this.loginService.currentUser$.subscribe((res:any)=>{
      console.log('res of currentUser',res);
      this.user=res;
    })
    // this.loginService.currentUser$.subscribe((res:any)=>{
    //   console.log('res',res);
    //   this.user = res.fullName;

    // })
    // console.log('', this.loginService.currentUser$.fullName);

  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
  logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('AccessToken')
    this.router.navigate(['/']);

  }

}
