import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactserviceService]
})
export class ContactComponent implements OnInit {
  con:Contact[]=[];
  
  constructor(private contactservice: ContactserviceService) { }

  ngOnInit(): void {
    const contactservice= this.contactservice.getContactOvenDetails();
    contactservice.subscribe((ContactData: Contact[])=>{
      this.con=ContactData;
    });
  }

}
