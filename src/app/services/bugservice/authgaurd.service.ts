import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IdentityService } from '../identity.service';



@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private identityService: IdentityService,  public router: Router) { }
  // canActivate(): boolean {
  //   if (localStorage.getItem('userRole')!=="admin") {
  //     this.router.navigate(['']);
  //     return false;
  //   }
  //   return true;
  // }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.identityService.isLoggedIn()) { // determine if the uder is logged in from this method.
          return true;
      }
      this.router.navigate(['']);
      return false;
  }

  

}
