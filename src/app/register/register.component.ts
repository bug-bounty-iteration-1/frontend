import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from './register';
import { registerservice } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reglist: register[] = [];
//firstName
    userObj = new FormGroup({
    firstName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  get firstName(){return this.userObj.get('firstName')}
  get password(){return this.userObj.get('password')}
  get userName(){return this.userObj.get('userName')}
  get lastName(){return this.userObj.get('lastName')}


   constructor(private regServ: registerservice,private router:Router) { }

  ngOnInit(): void {

  }

   public submitReg(reg: FormGroup){
     let stringFood = JSON.stringify(reg.value);
     this.regServ.postUser(stringFood).subscribe(
       response => {
         console.log(response);
         this.reglist.push(response);
         this.router.navigate(['']);

       }
     );
   }
}