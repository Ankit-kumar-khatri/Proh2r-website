import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrComponent } from './core-hr.component';

describe('CoreHrComponent', () => {
  let component: CoreHrComponent;
  let fixture: ComponentFixture<CoreHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
