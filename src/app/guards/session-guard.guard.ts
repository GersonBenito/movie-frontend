import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class SessionGuardGuard implements CanActivate {

  constructor( private router: Router, private cookie: CookieService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession(route);
  }

  // validar si el usuario esta logueado
  checkCookieSession(route: ActivatedRouteSnapshot): boolean{
    try {
      const usuario: boolean = this.cookie.check('user');
      const cookieUsurio = JSON.parse(this.cookie.get('user'));

      if(!usuario){
        this.router.navigate(['auth']);
      }

      // if(cookieUsurio.id_rol === route.data['role']){
      //   return true;
      // }
      

      return usuario;

    } catch (error) {
      this.router.navigate(['auth']);
      return false;
    }
  }
  
}
