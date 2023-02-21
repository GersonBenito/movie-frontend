import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ){

    this.formLogin = this.fb.group({
      nombre_usuario: [ '', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(): void{
    this._authService.iniciarSesion(this.formLogin.value).subscribe({
      next: (response) =>{
        this.toastr.success(response.mensaje, 'Inicio de sesion');
        this.router.navigate(['home'])
      },
      error: ({error}) =>{
        this.toastr.error(error.mensaje, 'Inicio de sesion');
      }
    });
  }

  showRegister(){
    this._authService.$typeView.next('register');
  }

}
