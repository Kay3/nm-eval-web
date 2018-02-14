import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { ApiComponent } from './components/api.component';
import { FilterPipe} from './filter.pipe';
import { SortPipe} from './sort.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, ApiComponent,FilterPipe, SortPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
