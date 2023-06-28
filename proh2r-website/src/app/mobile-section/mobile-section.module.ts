import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileSectionRoutingModule } from './mobile-section-routing.module';
import { MobileComponent } from './mobile/mobile.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    CommonModule,
    MobileSectionRoutingModule,
    SlickCarouselModule
  ]
})
export class MobileSectionModule { }
