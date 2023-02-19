import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { RentalsComponent } from './pages/rentals/rentals.component';
import { PopularityComponent } from './pages/popularity/popularity.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { ViewMoviesComponent } from './pages/view-movies/view-movies.component';
import { MovieRoutingModule } from './movie.routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShoppingComponent,
    RentalsComponent,
    PopularityComponent,
    ReturnsComponent,
    ViewMoviesComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
