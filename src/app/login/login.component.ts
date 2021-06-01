import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message="";
  user = new User();
  user2 = new User();
  userRole = "";
  constructor(private _service:LoginService ,private _route:Router) { }

  ngOnInit(): void {
  }

  submit(login){

    this._service.loginUserFromRemote(this.user).subscribe(
      response => {
        this.user2 = response;
        localStorage.setItem('userName',this.user.userName);

        this.userRole = response.currentRole.role;
        localStorage.setItem('userRole',this.userRole);
        if(this.userRole = "user"){
          this._route.navigate(['./userhome']);
        }
        else if (this.userRole = "admin"){
          this._route.navigate(['./adminhome']);
        }
      },
      error=>{
        console.log("Exception occured");
        this.message = "Please enter valid credentials."
      }
    )

  };

}
