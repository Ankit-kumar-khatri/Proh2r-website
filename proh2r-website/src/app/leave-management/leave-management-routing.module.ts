import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveMainComponent } from './leave-main/leave-main.component';
import { LeaveHomepageComponent } from './leave-homepage/leave-homepage.component';
import { LeaveGrantComponent } from './leave-grant/leave-grant.component';
import { LeaveDashboardComponent } from './leave-dashboard/leave-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'leave-homepage',
        pathMatch: 'full',
      },
      {
        path: 'leave-homepage',
        component: LeaveHomepageComponent,
      },
      {
        path: 'leave-grant',
        component: LeaveGrantComponent,
      },
      {
        path: 'leave-dashboard',
        component: LeaveDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveManagementRoutingModule {}
