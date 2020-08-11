import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputConfigComponent } from './input-output-config.component';

describe('InputOutputConfigComponent', () => {
  let component: InputOutputConfigComponent;
  let fixture: ComponentFixture<InputOutputConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
