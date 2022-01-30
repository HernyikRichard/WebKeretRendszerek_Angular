import { MedicationStatement } from './../../shared/models/medication-Statement';
import { FbBaseService } from './../../services/fb-base.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatVerticalStepper } from '@angular/material/stepper';

interface Statusz {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-cases',
  templateUrl: './new-cases.component.html',
  styleUrls: ['./new-cases.component.scss']
})

export class NewCasesComponent implements OnInit {

  form: FormGroup = new FormGroup({
    subject: new FormGroup({
      display: new FormControl('')
    }),
    status: new FormControl(''),
    effectiveDateTime: new FormControl('')
  });

  isLinear = true;
  selectedValue: string | null = null;
  @ViewChild('myForm') mytemplateForm: MatVerticalStepper | null = null;

  stat: Statusz[] = [
    { value: 'active', viewValue: 'active' },
    { value: 'completed', viewValue: 'completed' },
    { value: 'entered-in-error', viewValue: 'entered-in-error' },
    { value: 'intended', viewValue: 'intended' },
    { value: 'stopped', viewValue: 'stopped' },
    { value: 'on-hold', viewValue: 'on-hold' },
  ];


  constructor(private service: FbBaseService, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 1000
    }
    );
  }
  mentes(): void {
    console.log( this.form.value);
    this.service.add('MedicationStatement', this.form.value as MedicationStatement);
    this.openSnackBar('Mentés Sikeres', 'ok');
    this.mytemplateForm?.reset();
  }
  ngOnInit(): void {
  }

}
