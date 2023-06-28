import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModernHrRoutingModule } from './modern-hr-routing.module';
import { HrSoftwareComponent } from './hr-software/hr-software.component';
import { EmployeeProfilesComponent } from './employee-profiles/employee-profiles.component';
import { DocumentsComponent } from './documents/documents.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HrAnalyticsComponent } from './hr-analytics/hr-analytics.component';
import { CoreHrComponent } from './core-hr/core-hr.component';


@NgModule({
  declarations: [
    HrSoftwareComponent,
    EmployeeProfilesComponent,
    DocumentsComponent,
    HelpDeskComponent,
    HrAnalyticsComponent,
    CoreHrComponent
  ],
  imports: [
    CommonModule,
    ModernHrRoutingModule
  ]
})
export class ModernHrModule { }
