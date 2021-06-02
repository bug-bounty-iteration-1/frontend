import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor() { }

  isLoggedIn():boolean{
    if(localStorage.getItem('userRole')=='admin_user'){
      return true;
    }
    else if(localStorage.getItem('userRole')=='normal_user'){
      return true;
    }
    return false;
  }
}
