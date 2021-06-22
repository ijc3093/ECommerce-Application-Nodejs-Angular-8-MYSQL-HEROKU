import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(){
    const serverURL = 'https://backend-mysql-heroku.herokuapp.com/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
