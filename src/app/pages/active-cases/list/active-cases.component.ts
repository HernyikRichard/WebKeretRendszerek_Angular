import { MedicationStatement } from './../../../shared/models/medication-Statement';
import { FbBaseService } from './../../../services/fb-base.service';
import { Component,  OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-cases',
  templateUrl: './active-cases.component.html',
  styleUrls: ['./active-cases.component.scss']
})
export class ActiveCasesComponent implements OnInit{
  eset?: Observable<MedicationStatement[]>;

  constructor(private service: FbBaseService ) {   }
  get(){
    this.eset = this.service.getActive("MedicationStatement");
  }
  ngOnInit(){
    this.get();
  }
  mutat(){
    console.log(this.service.get("MedicationStatement"));
  }
}
