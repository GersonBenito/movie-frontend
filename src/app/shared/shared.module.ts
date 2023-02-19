import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    MatInputModule
  ]
})
export class SharedModule { }
