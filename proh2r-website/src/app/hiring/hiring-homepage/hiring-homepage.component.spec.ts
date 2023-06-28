import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringHomepageComponent } from './hiring-homepage.component';

describe('HiringHomepageComponent', () => {
  let component: HiringHomepageComponent;
  let fixture: ComponentFixture<HiringHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
