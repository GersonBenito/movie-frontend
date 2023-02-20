import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    pathMatch: 'full'
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MovieModule),
  },
  {
    path: 'administration',
    loadChildren: () => import('./admin/administracion.module').then( m => m.AdministracionModule),
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
