import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-projekt';

  constructor() {
    if (this.title) {
      console.log('mam title');
    } else {
      console.log('nie mam title');
    }
  }
}
