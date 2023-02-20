import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAdministracionComponent } from './pages/users-administracion/users-administracion.component';
import { MoviesAdministracionComponent } from './pages/movies-administracion/movies-administracion.component';
import { CategoriesAdministracionComponent } from './pages/categories-administracion/categories-administracion.component';


@NgModule({
  declarations: [
    UsersAdministracionComponent,
    MoviesAdministracionComponent,
    CategoriesAdministracionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministracionModule { }
