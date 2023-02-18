import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './pages/view-login/view-login.component';

const routes: Routes = [
    {
        path: '',
        component: ViewLoginComponent,
    }
]

@NgModule({

    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]

})


export class AuthRoutingModule {}