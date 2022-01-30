import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'new-elem',
                loadChildren: () => import('./../new-cases/new-cases.module').then(m=> m.NewCasesModule)
            },
            {
                path: 'active',
                loadChildren: () => import('./../active-cases/list/active-cases.module').then(m=> m.ActiveCasesModule)
            },
            {
                path: 'others',
                loadChildren: () => import('./../others-cases/list/others-cases.module').then(m=> m.OthersCasesModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }