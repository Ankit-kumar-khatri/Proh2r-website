import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveHomepageComponent } from './leave-homepage.component';

describe('LeaveHomepageComponent', () => {
  let component: LeaveHomepageComponent;
  let fixture: ComponentFixture<LeaveHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
