import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return (control && control.invalid && (control.dirty || control.touched || form.submitted));
  }
}

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent implements OnInit {

  taskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-z]/)
    ]),
    type: new FormControl('Task'),
    duedate: new FormControl(new Date()),
    priotity: new FormControl(''),
    options: new FormGroup({
      billable: new FormControl(false),
      blocker: new FormControl(false),
      technical: new FormControl(false),
    }),
    description: new FormControl(''),
  });
  datepickerOpened = false;
  errorMatcher = new CustomErrorStateMatcher();

  constructor(private breakpointObserver: BreakpointObserver) { }

  isMobile = this.breakpointObserver.observe([
    Breakpoints.Handset,
    Breakpoints.Tablet
  ]).pipe(
    map(result => result.matches)
  );

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  handleDate($event: any) {
    console.log($event);
  }

  // tslint:disable-next-line:typedef
  // dateFilter(d: Date) {
  //   const day = d.getDay();
  //   return day !== 0 && day !== 6;
  // }

  // tslint:disable-next-line:typedef
  // dateClass(d: Date) {
  //   const date = d.getDate();
  //   return (date === 1 || date === 20) ? 'datepicker-review-day' : undefined;
  // }

  // tslint:disable-next-line:typedef
  createTask() {
    console.log(this.taskForm.value);
  }
}

