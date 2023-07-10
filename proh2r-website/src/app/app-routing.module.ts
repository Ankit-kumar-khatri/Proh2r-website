import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'payroll',
    loadChildren: () =>
      import('./payroll/payroll.module').then((m) => m.PayrollModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project-timesheet',
    loadChildren: () =>
      import('./project-timesheet/project-timesheet.module').then(
        (m) => m.ProjectTimesheetModule
      ),
  },
  {
    path: 'leave-management',
    loadChildren: () =>
      import('./leave-management/leave-management.module').then(
        (m) => m.LeaveManagementModule
      ),
  },
  {
    path: 'modern-hr',
    loadChildren: () =>
      import('./modern-hr/modern-hr.module').then((m) => m.ModernHrModule),
  },
  {
    path: 'hiring',
    loadChildren: () =>
      import('./hiring/hiring.module').then((m) => m.HiringModule),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./time-attendance/time-attendance.module').then(
        (m) => m.TimeAttendanceModule
      ),
  },
  {
    path: 'mobile-section',
    loadChildren: () =>
      import('./mobile-section/mobile-section.module').then(
        (m) => m.MobileSectionModule
      ),
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  // {
  //   path:'dgv',
  //   load
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
