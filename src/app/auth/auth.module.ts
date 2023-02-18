import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewLoginComponent } from './pages/view-login/view-login.component';
import { AuthRoutingModule } from './auth.routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ViewLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
