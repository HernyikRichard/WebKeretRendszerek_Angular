import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherCardComponent } from './other-card.component';



@NgModule({
  declarations: [
    OtherCardComponent,
  ],
  imports: [
    CommonModule,MatButtonModule,MatCardModule
  ],exports: [OtherCardComponent]
})
export class OtherCardModule { }
