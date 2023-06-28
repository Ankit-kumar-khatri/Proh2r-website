import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAttendanceRoutingModule } from './time-attendance-routing.module';
import { TimeAttendanceComponent } from './time-attendance/time-attendance.component';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import { AttendanceReportsComponent } from './attendance-reports/attendance-reports.component';


@NgModule({
  declarations: [
    TimeAttendanceComponent,
    AttendanceManagementComponent,
    GeoLocationComponent,
    CheckInOutComponent,
    AttendanceReportsComponent,
  ],
  imports: [
    CommonModule,
    TimeAttendanceRoutingModule
  ]
})
export class TimeAttendanceModule { }
