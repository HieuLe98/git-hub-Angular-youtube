import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() childCall: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public callParent() {
    console.log('Hello Dad');
    this.childCall.emit(this.name);
  }

  public thanksForMoney(amount: number) {
    console.log(`${this.name}: thanks for ${amount}$`);
  }
}
