import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { TimeAttendanceComponent } from './time-attendance/time-attendance.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import { AttendanceReportsComponent } from './attendance-reports/attendance-reports.component';

const routes: Routes = [
  {
    path: '',
    component: TimeAttendanceComponent,
    children: [
      {
        path: '',
        redirectTo: 'attendance-management',
        pathMatch: 'full',
      },
      {
        path: 'attendance-management',
        component: AttendanceManagementComponent,
      },
      {
        path: 'geo-location',
        component: GeoLocationComponent,
      },
      {
        path: 'check-in-out',
        component: CheckInOutComponent,
      },
      {
        path: 'attendance-reports',
        component: AttendanceReportsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeAttendanceRoutingModule {}
