import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService
  ){
    this.formRegistro = this.fb.group({
      nombre_usuario: ['', [Validators.required, Validators.minLength(5) ]],
      email: [ '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  registrarUsuario(): void{
    console.log(this.formRegistro.value);
    // this.navigateToLogin();
  }

  navigateToLogin(){
    this._authService.$typeView.next('login');
  }
}
