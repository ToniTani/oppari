import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgwWowService} from 'ngx-wow';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
