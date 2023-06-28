import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AboutComponent } from './about/about.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ReadMoreComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule, NgxSpinnerModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
