import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/auth/interfaces/login.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TypeUser } from 'src/enums/type-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() public viewSearch: boolean = true;
  public user: Usuario = {
    id_usuario: 0,
    nombre_usuario: '',
    email: '',
    id_rol: 0,
  }

  public showAdmin: boolean = false;
  public logueado: boolean = false;

  constructor( 
    private router: Router, 
    private cookie: CookieService,
    private authService: AuthService
  ){ 
    this.getTypeUser();
  }

  redirectTo(route: string){
    this.router.navigate([route]);
  }

  getTypeUser(){
    this.user = JSON.parse(this.cookie.get('user') || '{}');
    this.showAdmin = this.user.id_rol === TypeUser.Admin;
    this.authService.$isLogger.subscribe({
      next: login =>{
        this.logueado = login;
      }
    })
  }

  cerarSesion(){
    this.cookie.delete('user', '/');
    window.location.reload();
  }
}
