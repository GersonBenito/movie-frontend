import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAdministracionComponent } from './pages/categories-administracion/categories-administracion.component';
import { MoviesAdministracionComponent } from './pages/movies-administracion/movies-administracion.component';
import { UsersAdministracionComponent } from './pages/users-administracion/users-administracion.component';
import { ViewAdminComponent } from './pages/view-admin/view-admin.component';


const router: Routes = [
    {
        path: 'usuarios',
        component: UsersAdministracionComponent
    },
    {
        path: 'peliculas',
        component: MoviesAdministracionComponent,
    },
    {
        path: 'categorias',
        component: CategoriesAdministracionComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(router) ],
    exports: [ RouterModule ],
})

export class AdministracionRoutingModule {};