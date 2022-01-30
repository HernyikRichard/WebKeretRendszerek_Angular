import { ActiveCasesComponent } from './active-cases.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ActiveCasesComponent,
        data: { title: 'Active element' }
    }
];  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ActiveCasesRoutingModule { }