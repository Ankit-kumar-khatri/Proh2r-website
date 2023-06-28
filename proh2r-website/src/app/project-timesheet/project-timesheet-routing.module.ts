import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectMainComponent } from './project-main/project-main.component';
import { ProjectHomepageComponent } from './project-homepage/project-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'project-homepage',
        pathMatch: 'full',
      },
      {
        path: 'project-homepage',
        component: ProjectHomepageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTimesheetRoutingModule {}
