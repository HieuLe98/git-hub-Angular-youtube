import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  public fullname: string = 'nguyễn quốc đạt';
  public title: string = 'Học Angular';
  public number: number = 31.101998;
  public result:number = 0.8516;
  public numbers: number[] = [0,1,2,3,4,5];
  public total: number = 75.8;
  public date = new Date();
  public product = {
    id: 1,
    name: 'SamSung Galaxy',
    price: 15,
    status: true
  }
}
