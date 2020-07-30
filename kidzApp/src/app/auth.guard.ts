import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router)
  {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if (this.authService.isLoggedIn())
    {
      console.log('true')
      return true
    }
    else{
      
      this.router.navigate(['/login'])
      return false
    }
  }



  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
}
