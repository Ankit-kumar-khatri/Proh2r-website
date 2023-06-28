import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringMainComponent } from './hiring-main/hiring-main.component';
import { HiringHomepageComponent } from './hiring-homepage/hiring-homepage.component';



@NgModule({
  declarations: [
    HiringMainComponent,
    HiringHomepageComponent,
  ],
  imports: [
    CommonModule,
    HiringRoutingModule
  ]
})
export class HiringModule { }
