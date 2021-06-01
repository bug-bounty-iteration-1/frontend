import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    firstName: new FormControl(''),
    password: new FormControl(''),
    userName: new FormControl(''),
    lastName: new FormControl('')
  });

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