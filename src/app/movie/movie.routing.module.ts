import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMovieComponent } from './pages/details-movie/details-movie.component';
import { ViewMoviesComponent } from './pages/view-movies/view-movies.component';

const routes: Routes = [
    {
        path: '',
        component: ViewMoviesComponent
    },
    {
        path: 'detalle/:id',
        component: DetailsMovieComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class MovieRoutingModule {}