import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExamplesModule } from './material-examples/material-examples.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialExamplesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

