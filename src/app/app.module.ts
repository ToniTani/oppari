import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgwWowService} from 'ngx-wow';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    SecondpageComponent,
    GalleryComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
