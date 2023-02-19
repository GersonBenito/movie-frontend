import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
  ){

    this.formLogin = this.fb.group({
      email: [ '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(): void{
    console.log(this.formLogin.value);
  }

  register(){
    this._authService.$typeView.next('register');
  }

}
