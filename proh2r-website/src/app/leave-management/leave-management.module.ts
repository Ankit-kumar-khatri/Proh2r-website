import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveMainComponent } from './leave-main/leave-main.component';
import { LeaveHomepageComponent } from './leave-homepage/leave-homepage.component';
import { LeaveGrantComponent } from './leave-grant/leave-grant.component';
import { LeaveDashboardComponent } from './leave-dashboard/leave-dashboard.component';


@NgModule({
  declarations: [
    LeaveMainComponent,
    LeaveHomepageComponent,
    LeaveGrantComponent,
    LeaveDashboardComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule
  ]
})
export class LeaveManagementModule { }
