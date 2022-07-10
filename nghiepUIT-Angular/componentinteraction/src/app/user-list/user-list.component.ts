import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('users') users: any[] = [];
  @Input('fullname') fullname: any = '';
  @Input('phone') phone: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
