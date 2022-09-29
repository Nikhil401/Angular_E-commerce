import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  constructor() { }
  con:Contact[]=[
   {
    id:1,
    img:'assets/images/profile.jpg',
    name:'Nikhil',
    email:"nikhil@gmail.com",
    phone:9955764521
   },
   {
    id:2,
    img:'assets/images/profile.jpg',
    name:'Karthik',
    email:"kartik@gmail.com",
    phone:8051277098
   },
   {
    id:3,
    img:'assets/images/profile1.jpg',
    name:'Pratusha',
    email:"pratu@gmail.com",
    phone:7250856803
   }
  ];

  public getContactOvenDetails(): any {
    const microObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.con);
      }, 1000);
    });
    return microObservable;
  }
}
