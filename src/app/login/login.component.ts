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

        this.currentRole = response.currentRole.role;
        this.roleId = response.currentRole.roleId;
        console.log(response.currentRole.role)
        // localStorage.setItem('userRole',this.userRole);
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
