import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringHomepageComponent } from './hiring-homepage/hiring-homepage.component';
import { HiringMainComponent } from './hiring-main/hiring-main.component';

const routes: Routes = [
  {
    path: '',
    component: HiringMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'hiring-home',
        pathMatch: 'full',
      },
      {
        path: 'hiring-home',
        component: HiringHomepageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiringRoutingModule {}
