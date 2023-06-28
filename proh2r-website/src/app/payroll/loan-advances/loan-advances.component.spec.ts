import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAdvancesComponent } from './loan-advances.component';

describe('LoanAdvancesComponent', () => {
  let component: LoanAdvancesComponent;
  let fixture: ComponentFixture<LoanAdvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAdvancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
