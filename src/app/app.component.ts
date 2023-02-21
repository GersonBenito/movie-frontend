import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'movie-frontend';

  constructor(private cookie: CookieService, private authService: AuthService){
    if(this.cookie.get('user')){
      this.authService.$isLogger.next(true);
    }
  }
}
