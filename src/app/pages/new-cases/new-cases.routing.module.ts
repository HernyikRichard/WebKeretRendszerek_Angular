import { NewCasesComponent } from './new-cases.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NewCasesComponent,
        data: { title: 'Új elem' }
    }
];  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewCasesRoutingModule { }