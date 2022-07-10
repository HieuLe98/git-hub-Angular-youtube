import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried: boolean = false;
  @Input('age') myAge: number = 0;
  @Output('txtFullName') onHandleFullName = new EventEmitter<string>();
  @Output('txtPhone') onHandlePhone = new EventEmitter<string>();

  private _name = '';
  public txtFullName: string = '';
  public txtPhone: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  @Input()
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  public onSubmitForm() {
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandlePhone.emit(this.txtPhone);
  }
}
