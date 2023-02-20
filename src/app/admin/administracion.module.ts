import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAdministracionComponent } from './pages/users-administracion/users-administracion.component';
import { MoviesAdministracionComponent } from './pages/movies-administracion/movies-administracion.component';
import { CategoriesAdministracionComponent } from './pages/categories-administracion/categories-administracion.component';
import { ViewAdminComponent } from './pages/view-admin/view-admin.component';
import { AdministracionRoutingModule } from './administracion.routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersAdministracionComponent,
    MoviesAdministracionComponent,
    CategoriesAdministracionComponent,
    ViewAdminComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SharedModule,
  ]
})
export class AdministracionModule { }
