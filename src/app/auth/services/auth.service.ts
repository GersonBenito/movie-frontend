import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Loging, Sesion, Usuario } from '../interfaces/login.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public URL: string = environment.URL_BASE;
  public $isLogger = new BehaviorSubject<boolean>(false);
  public $typeView = new BehaviorSubject<'login' | 'register'>('login');

  constructor( private http: HttpClient, private cookie: CookieService ) { }

  // iniciar sesion y guardar los datos del usuario en las cookies
  iniciarSesion(sesion: Sesion): Observable<Loging>{
    return this.http.post<Loging>(`${this.URL}/login`, sesion).pipe(
      tap(({ data }) =>{
        console.log(data);
        
        const user: Usuario = {
          id_usuario: data.id_usuario,
          nombre_usuario: data.nombre_usuario,
          email: data.email,
          id_rol: data.id_rol
        }
        this.cookie.set('user', JSON.stringify(user), environment.expiredToken, '/');
        this.$isLogger.next(true);
        
      })
    )
  }
  
}
