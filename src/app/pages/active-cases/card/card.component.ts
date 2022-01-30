import { FbBaseService } from './../../../services/fb-base.service';
import { MedicationStatement } from './../../../shared/models/medication-Statement';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kartya',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

 @Input() eset?: MedicationStatement;
  
  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
  }
  deleteElem(id: any){
    this.service.delete('MedicationStatement',id);
  }


}
