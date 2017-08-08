import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
  phoneNumber = '8008553258';
  price = 10000000000;
  currencyType = 'usd';
  dob = new Date();
  numbersOnlyRegex = '[0-9]';
  options = {
minDate: '08/03/2017',
maxDate: '08/20/2017'
  };

  // timeChange() {
  //   ///to refresh the time periodically
  //   // setInterval(() => {
  //   //   this.dob = new Date();
  //   // }, 1000);
  //   // this.dob = new Date();
  // }
}
