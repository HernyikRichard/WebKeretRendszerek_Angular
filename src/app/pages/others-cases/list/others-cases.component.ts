import { FbBaseService } from './../../../services/fb-base.service';
import { Observable } from 'rxjs';
import { MedicationStatement } from './../../../shared/models/medication-Statement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others-cases',
  templateUrl: './others-cases.component.html',
  styleUrls: ['./others-cases.component.scss']
})
export class OthersCasesComponent implements OnInit {
  eset?: Observable<MedicationStatement[]>;

  constructor(private service: FbBaseService ) { }

  get(){
    this.eset = this.service.getOthers("MedicationStatement");
  }
  ngOnInit(): void {
    this.get();
  }

}
