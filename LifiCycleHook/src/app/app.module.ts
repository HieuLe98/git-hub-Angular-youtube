import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { OtherLifecycleComponent } from './components/other-lifecycle/other-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    OtherLifecycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
