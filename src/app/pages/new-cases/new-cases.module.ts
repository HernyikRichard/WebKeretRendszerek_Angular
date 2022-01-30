import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { NewCasesRoutingModule } from './new-cases.routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCasesComponent } from './new-cases.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NewCasesComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,MatStepperModule,MatSelectModule,
    MatInputModule, MatButtonModule, MatCardModule,NewCasesRoutingModule,MatSnackBarModule
  ],
  exports:[NewCasesComponent]
})
export class NewCasesModule {
  
 }
