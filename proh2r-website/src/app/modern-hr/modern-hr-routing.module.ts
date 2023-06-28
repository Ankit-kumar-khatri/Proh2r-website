import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreHrComponent } from './core-hr/core-hr.component';
import { DocumentsComponent } from './documents/documents.component';
import { EmployeeProfilesComponent } from './employee-profiles/employee-profiles.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HrAnalyticsComponent } from './hr-analytics/hr-analytics.component';
import { HrSoftwareComponent } from './hr-software/hr-software.component';

const routes: Routes = [
  {
    path:'',component:CoreHrComponent,
    children:[
      {
        path:'',redirectTo:'hr-software',pathMatch:'full'
      },
      {
        path:'hr-software',component:HrSoftwareComponent
      },
      {
        path:'employee-profiles',component:EmployeeProfilesComponent
      },
      {
        path:'documents',component:DocumentsComponent
      },
      {
        path:'help-desk',component:HelpDeskComponent
      },
      {
        path:'hr-analytics',component:HrAnalyticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModernHrRoutingModule { }
