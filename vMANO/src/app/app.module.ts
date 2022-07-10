import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ContainerComponent } from './components/container/container.component';
import { ContentLeftComponent } from './components/container/content-left/content-left.component';
import { ContentRightComponent } from './components/container/content-right/content-right.component';
import { ProductComponent } from './components/container/product/product.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ContainerComponent,
    ContentLeftComponent,
    ContentRightComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
