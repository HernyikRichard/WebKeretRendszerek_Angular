import { CardModule } from './../card/card.module';
import { ActiveCasesRoutingModule } from './active-cases-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActiveCasesComponent } from './active-cases.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ActiveCasesComponent],
  imports: [
    ActiveCasesRoutingModule,CommonModule,
     MatCardModule, MatButtonModule, CardModule
    ],
  exports: [ActiveCasesComponent]
})
export class ActiveCasesModule { }
