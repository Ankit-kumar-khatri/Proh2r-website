import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHomepageComponent } from './project-homepage.component';

describe('ProjectHomepageComponent', () => {
  let component: ProjectHomepageComponent;
  let fixture: ComponentFixture<ProjectHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
