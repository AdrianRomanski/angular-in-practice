import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User, UserService} from '../../services/user.service';
import {filter, switchMap} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-form-extras',
  templateUrl: './form-extras.component.html',
  styleUrls: ['./form-extras.component.scss']
})
export class FormExtrasComponent implements OnInit {
  assigneeInput = new FormControl('', []);

  suggestions = this.assigneeInput.valueChanges.pipe(
    filter(selection => 'object' !== typeof selection),
    switchMap(input => this.usersService.findAllByName(input)));

  taskExtras = new FormGroup({
    assignee: new FormControl(null, [])
  });


  constructor(private usersService: UserService) {}

  ngOnInit(): void {
  }

  formatUserSuggestion(selection: string | User): any {
    if ('object' === typeof selection) {
      return selection.name;
    } else {
      return selection;
    }
  }

  selectAssign(selection: MatAutocompleteSelectedEvent): void {
    this.taskExtras.get('assignee')?.setValue(selection.option.value);
  }
}
