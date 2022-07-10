import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('txtName')
  name!: ElementRef;
  title = 'ViewChild';

  onGetData(txtName: any) {
    console.log(txtName.value);

  }

  onGetDataComp() {
    console.log(this.name.nativeElement.value);

  }
}
