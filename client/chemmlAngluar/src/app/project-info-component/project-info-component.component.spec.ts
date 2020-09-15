import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoComponentComponent } from './project-info-component.component';

describe('ProjectInfoComponentComponent', () => {
  let component: ProjectInfoComponentComponent;
  let fixture: ComponentFixture<ProjectInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
