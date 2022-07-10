import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  public start: number = 0;
  public idFilter: string = '';
  public nameFilter: string = '';
  public statusFilter: string = '';
  public product :any[] = [
    {
      id: 1,
      name: 'Dell inspriron n5110',
      status: true
    },
    {
      id: 2,
      name: 'Iphone7',
      status: false
    },
    {
      id: 3,
      name: 'Samsung Galaxy S6',
      status: false
    },
    {
      id: 4,
      name: 'Lenovo',
      status: true
    }
  ]
}
