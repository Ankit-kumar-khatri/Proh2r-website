import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTimesheetRoutingModule } from './project-timesheet-routing.module';
import { ProjectMainComponent } from './project-main/project-main.component';
import { ProjectHomepageComponent } from './project-homepage/project-homepage.component';


@NgModule({
  declarations: [
    ProjectMainComponent,
    ProjectHomepageComponent
  ],
  imports: [
    CommonModule,
    ProjectTimesheetRoutingModule
  ]
})
export class ProjectTimesheetModule { }
