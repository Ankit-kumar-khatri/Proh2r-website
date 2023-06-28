import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveGrantComponent } from './leave-grant.component';

describe('LeaveGrantComponent', () => {
  let component: LeaveGrantComponent;
  let fixture: ComponentFixture<LeaveGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveGrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
