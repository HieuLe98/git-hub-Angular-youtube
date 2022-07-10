import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'QRcode';
  public qrInfo = 'https://www.facebook.com/quocdat2208'
  public width = 400;
  public name = '';
  public age = 0;
  public baseInfo = 'https://www.facebook.com/';

  public ngOnInit(): void {

  }

  public changeBase(event: any) {
    this.baseInfo = event.target.value;
    this.qrInfo = event.target.value;
    this.combine();
  }

  public changeName(event: any) {
    this.name = event.target.value;
    this.combine();
  }

  public changeAge(event: any) {
    this.age = event.target.value;
    this.combine();
  }

  private combine(): void {
    const data = JSON.stringify({name: this.name, age: this.age});
    this.qrInfo = this.baseInfo + '?data=' + data;
  }
}
