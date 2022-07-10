import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Output() preDay: EventEmitter<any> = new EventEmitter();
  @Output() nextDay: EventEmitter<any> = new EventEmitter();
  @Output() changeDay: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    // this.preDay.emit();
    this.changeDay.emit(true);
  }

  next() {
    // this.nextDay.emit();
    this.changeDay.emit(false);
  }


}
