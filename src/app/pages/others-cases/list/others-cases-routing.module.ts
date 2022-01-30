import { OthersCasesComponent } from './others-cases.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: OthersCasesComponent,
        data: { title: 'Active element' }
    }
];  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OthersCasesRoutingModule { }