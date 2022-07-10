import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Session1';
  name: string = 'Lê Minh Hiếu';
  color: string = 'black';
  show: boolean = true;
  colors: string[] = ['red', 'green', 'blue', 'yellow'];
  day: number = 0;

  prevDay() {
    if(this.day == 0)
      this.day = 7;
    this.day--;
  }

  nextDay() {
    if(this.day == 6)
      this.day = -1;
    this.day++;
  }

  changeDay(evt: boolean) {
    if(evt) {
      if(this.day == 0)
      this.day = 7;
    this.day--;
    } else {
      if(this.day == 6)
      this.day = -1;
    this.day++;
    }
  }
}
