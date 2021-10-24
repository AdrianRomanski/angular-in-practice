import { Component, OnInit } from '@angular/core';
import {Contact, ContactsDataService} from '../../services/contacts-data.service';

@Component({
  selector: 'app-lists-example',
  templateUrl: './lists-example.component.html',
  styleUrls: ['./lists-example.component.scss']
})
export class ListsExampleComponent implements OnInit {

  contacts: Contact[] = [];
  // @ts-ignore
  selected: Contact;

  constructor(private service: ContactsDataService) { }

  ngOnInit(): void {
    this.contacts = this.service.findContacts();
  }

}
