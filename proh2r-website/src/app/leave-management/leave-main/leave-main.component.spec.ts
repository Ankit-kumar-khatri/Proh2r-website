import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMainComponent } from './leave-main.component';

describe('LeaveMainComponent', () => {
  let component: LeaveMainComponent;
  let fixture: ComponentFixture<LeaveMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
