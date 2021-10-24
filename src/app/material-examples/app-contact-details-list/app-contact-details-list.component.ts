import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../services/contacts-data.service';

@Component({
  selector: 'app-contact-details-list',
  templateUrl: './app-contact-details-list.component.html',
  styleUrls: ['./app-contact-details-list.component.scss']
})
export class AppContactDetailsListComponent implements OnInit {

  @Input()
  contact: Contact = {
    name: 'test',
    position: 'test',
    email: 'test',
    photo: 'test'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
