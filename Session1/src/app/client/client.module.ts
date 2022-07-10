import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientComponent,
    HomeComponent
  ]
})
export class ClientModule { }
