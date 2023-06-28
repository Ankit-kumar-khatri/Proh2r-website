import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll/payroll.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { ExpenseManagementComponent } from './expense-management/expense-management.component';
import { LoanAdvancesComponent } from './loan-advances/loan-advances.component';
import { PayrollSoftwareComponent } from './payroll-software/payroll-software.component';


@NgModule({
  declarations: [
    PayrollComponent,
    ComplianceComponent,
    ExpenseManagementComponent,
    LoanAdvancesComponent,
    PayrollSoftwareComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
