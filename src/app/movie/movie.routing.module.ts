import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMoviesComponent } from './pages/view-movies/view-movies.component';

const routes: Routes = [
    {
        path: '',
        component: ViewMoviesComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class MovieRoutingModule {}