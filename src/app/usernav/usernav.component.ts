import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this._route.navigate(['']);  
  }

}
