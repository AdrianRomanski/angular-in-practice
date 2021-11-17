import { Component, OnInit } from '@angular/core';
import {Contact, ContactsDataService} from '../../material-examples/services/contacts-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  // @ts-ignore
  selected: null | Contact;

  constructor(private service: ContactsDataService) { }

  ngOnInit(): void {
    this.contacts = this.service.findContacts();
  }

  toggleSelection(user: Contact): void {
    this.selected = user === this.selected ? null : user;
  }

}
