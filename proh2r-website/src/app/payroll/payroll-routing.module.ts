import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplianceComponent } from './compliance/compliance.component';
import { ExpenseManagementComponent } from './expense-management/expense-management.component';
import { LoanAdvancesComponent } from './loan-advances/loan-advances.component';
import { PayrollSoftwareComponent } from './payroll-software/payroll-software.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  {
    path:'',component:PayrollComponent,
    children:[
      {
        path:'',redirectTo:'payroll-software',pathMatch:'full'
      },
      {
        path:'payroll-software',component:PayrollSoftwareComponent
      },
      {
        path:'compliance',component:ComplianceComponent
      },
      {
        path:'expense-management',component:ExpenseManagementComponent
      },
      {
        path:'loan-advances',component:LoanAdvancesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
