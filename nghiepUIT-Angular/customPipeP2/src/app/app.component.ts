import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customPipeP2';
  public arrNumber = [1, 3, 2, 4, 7];
  public sortNumber = 1;

  public onSubmitSort(value: any) {
    this.sortNumber = value
  }
}
