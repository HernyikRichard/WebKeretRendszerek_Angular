import { MedicationStatement } from './../shared/models/medication-Statement';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }
  
  async add(collectionName: string, data: MedicationStatement, id?: string): Promise<string>{
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  getActive(collectionName: string) : Observable<MedicationStatement[]>{
   return this.afs.collection(collectionName,ref=>ref
                  .where('status','==','active')
                  .orderBy('id','desc')).valueChanges() as Observable<MedicationStatement[]>
  }

  getOthers(collectionName: string) : Observable<MedicationStatement[]>{
    return this.afs.collection(collectionName,ref=>ref
      .orderBy('id','asc')).valueChanges() as Observable<MedicationStatement[]>
  }


  get(collectionName: string) : Observable<MedicationStatement[]>{
    return this.afs.collection(collectionName).valueChanges() as Observable<MedicationStatement[]>;
  }

  delete(collectionName: string, id: string){
    return this.afs.collection(collectionName).doc(id).delete();
  }

}
