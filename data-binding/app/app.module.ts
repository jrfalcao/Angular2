import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {DataBindingModule} from './data-binding/data-binding.module';

@NgModule({
  imports:      [ BrowserModule, DataBindingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
