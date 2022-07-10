import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sortBy: string = 'name';
  public sortValue: number = 1;
  public products: any[] = [
    {
      id: 1,
      name: 'Iphone 7 plus',
      price: 500
    },
    {
      id: 2,
      name: 'Iphone 6 plus',
      price: 400
    },
    {
      id: 3,
      name: 'SamSung Galaxy s7',
      price: 450
    },
    {
      id: 4,
      name: 'Oppo F1S',
      price: 200
    }
  ];

  onSort(value: string) {
    this.sortBy = value;
    this.sortValue = -this.sortValue;
  }
}
