import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
