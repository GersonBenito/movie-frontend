import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
    ReactiveFormsModule,
    NavbarComponent,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class SharedModule { }
