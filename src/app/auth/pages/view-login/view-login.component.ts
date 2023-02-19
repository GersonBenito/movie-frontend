import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})
export class ViewLoginComponent {

  public view: 'login' | 'register' = 'login';

  constructor(private _authService: AuthService){
    this.cambiarVista();
  }


  cambiarVista(): void{
    this._authService.$typeView.subscribe({
      next: value =>{
       this.view = value;
      },
      error: error =>{
        console.log(error);
      }
    })
  }

}
