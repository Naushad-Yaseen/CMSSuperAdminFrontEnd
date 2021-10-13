import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  users:any;
  user : User
 constructor(private router: Router ) {

   this.users = localStorage.getItem('currentUser');
   var currentUser = JSON.parse(this.users);
   if(currentUser!=null)
   {

     this.user = currentUser;


     console.log(this.user);

   }
  }


  ngOnInit(): void {
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
