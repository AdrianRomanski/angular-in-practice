import { Component, OnInit } from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  activeColumns = ['id', 'title'];
  dataSource =  [{ id: 123 , title: 'Test', competed: true}];

  constructor() { }

  ngOnInit(): void {
  }
}
