import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public parentMess = '';
  @ViewChild('Đạt') Đạt: ChildComponent | undefined;
  @ViewChild('Trang') Trang: ChildComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public hello(name: string) {
    this.parentMess = `Hello ${name}`;
  }

  public money() {
    this.Đạt?.thanksForMoney(5);
    this.Trang?.thanksForMoney(50);
  }
}
