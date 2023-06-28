import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSoftwareComponent } from './hr-software.component';

describe('HrSoftwareComponent', () => {
  let component: HrSoftwareComponent;
  let fixture: ComponentFixture<HrSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
