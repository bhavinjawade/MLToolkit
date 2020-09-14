import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeMainComponent } from './visualize-main.component';

describe('VisualizeMainComponent', () => {
  let component: VisualizeMainComponent;
  let fixture: ComponentFixture<VisualizeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
