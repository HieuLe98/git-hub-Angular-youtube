import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ParentComponent } from './parent/parent.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SiblingComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
