import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMarried: boolean = true;
  public age: number = 18;
  public name: string = 'Đạt';
  public txtFullName: string = '';
  public txtPhone: string = '';
  public users: any[] = [
    {
      id: 1,
      name: 'Nguyễn Quốc Đạt',
      phone: 123
    },

    {
      id: 2,
      name: 'Nguyễn Thu Trang',
      phone: 456
    },

    {
      id: 3,
      name: 'Nguyễn Quốc Thu',
      phone: 789
    }
  ];

  public getFullName(value: any) {
    this.txtFullName = value;
  }

  public getPhone(value: any) {
    this.txtPhone = value;
  }
}
