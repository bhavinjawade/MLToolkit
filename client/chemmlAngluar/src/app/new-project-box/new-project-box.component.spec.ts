import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectBoxComponent } from './new-project-box.component';

describe('NewProjectBoxComponent', () => {
  let component: NewProjectBoxComponent;
  let fixture: ComponentFixture<NewProjectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
