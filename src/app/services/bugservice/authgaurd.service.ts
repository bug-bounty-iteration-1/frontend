import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor( public router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('userRole')!=="admin") {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
