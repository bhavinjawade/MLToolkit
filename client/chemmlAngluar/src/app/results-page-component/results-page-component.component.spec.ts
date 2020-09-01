import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPageComponentComponent } from './results-page-component.component';

describe('ResultsPageComponentComponent', () => {
  let component: ResultsPageComponentComponent;
  let fixture: ComponentFixture<ResultsPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
