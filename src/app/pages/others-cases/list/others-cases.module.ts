import { OtherCardModule } from './../other-card/other-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { OthersCasesRoutingModule } from './others-cases-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersCasesComponent } from './others-cases.component';



@NgModule({
  declarations: [
    OthersCasesComponent
  ],
  imports: [
    CommonModule, OthersCasesRoutingModule,MatCardModule,
    MatButtonModule,OtherCardModule
  ],
  exports:[OthersCasesComponent]
 
})
export class OthersCasesModule { }
