import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadMoreComponent } from '../read-more/read-more.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { HomeSectionComponent } from './home-section/home-section.component';

const routes: Routes = [

  {
    path:'',component:HomeSectionComponent,
    children:[
      {
        path:'',component:Home1Component
      }
    ]
  },
  // // {
  // //   path:'',redirectTo:'home-component' , pathMatch:'full'   
  // // },
  // {
  //   path:'/',component:Home1Component,pathMatch:;
  // },

  {
    path:'read-more',component:ReadMoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
