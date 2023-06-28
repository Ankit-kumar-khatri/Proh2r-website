import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Home1Component } from './home1/home1.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeSectionComponent } from './home-section/home-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    Home1Component,
    HomeSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    NgxSpinnerModule

  ],
})
export class HomeModule { }
