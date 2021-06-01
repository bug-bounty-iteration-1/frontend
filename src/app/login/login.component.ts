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
  userName="";
  password="";

  user = new User();
  currentRole="";
  roleId: number;

  passChange(temp:any){
    this.password=temp.target.value;
  }
  userChange(temp:any){
    this.userName=temp.target.value;
  }
  constructor(private _service:LoginService ,private _route:Router) { }

  ngOnInit(): void {
  }

  submit(login){

    this._service.loginUserFromRemote(this.userName, this.password).subscribe(
      response => {
        this.user = response;
        localStorage.setItem('userName',this.user.userName);
        localStorage.setItem('userId',this.user.userId.toString());
        this.currentRole = response.currentRole.role;
        this.roleId = response.currentRole.roleId;
        console.log(response.currentRole.role)
        localStorage.setItem('userRole',(response.currentRole.role));
        localStorage.setItem('role', this.currentRole);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('lastName', response.lastName);
        localStorage.setItem('user', JSON.stringify(response));

        console.log(this.currentRole);

        if(this.roleId === 2){
          this._route.navigate(['./userhome']);
        }
        else {
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
