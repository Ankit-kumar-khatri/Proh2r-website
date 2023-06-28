import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringMainComponent } from './hiring-main.component';

describe('HiringMainComponent', () => {
  let component: HiringMainComponent;
  let fixture: ComponentFixture<HiringMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
