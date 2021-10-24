import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from '../services/contacts-data.service';

@Component({
  selector: 'app-contact-selection-list',
  templateUrl: './contact-selection-list.component.html',
  styleUrls: ['./contact-selection-list.component.scss']
})
export class ContactSelectionListComponent implements OnInit {

  @Input()
  contacts: Contact[] = [];

  @Output() selectionChange = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit(): void {
  }

  select(contact: Contact): void {
    this.selectionChange.emit(contact);
  }
}
