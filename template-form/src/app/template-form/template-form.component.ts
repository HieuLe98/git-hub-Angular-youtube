import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.class';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userForm : NgForm) {
    console.log(userForm);

  }

  onReset(userForm : NgForm) {
    userForm.reset();
  }
}
