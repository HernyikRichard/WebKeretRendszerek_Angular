import { MedicationStatement } from '../models/medication-Statement';
export const MES: MedicationStatement[] = [
  {
    id:"as2",
    status: "stopped",
    subject: {
      identifier:{
        use: "Kiss Adam"
      }
    },
    note: [
      {
        text: "ELSO TESZT"
      }
    ]
  },
  {
    id:"as3",
    status: "active",
    note: [
      {
        text: "MASODIK TESZT"
      }
    ]
  },
  {
    id:"as4",
    status: "intended",
    note: [
      {
        text: "HARMADIK TESZT"
      }
    ]
  },
  {
    id:"as002",
    status: "active",
    subject: {
      identifier:{
        use: "Kiss Enikő"
      }
    },
    note: [
      {
        text: "ez egy tetszt szöveg hogy töri e as osort vagy nem probálok minnél hosszabb szöveg írni a biztonság kedvéért hogy hátha"
      }
    ]
  },
  
];