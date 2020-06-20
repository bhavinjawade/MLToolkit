import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolConfigComponent } from './tool-config.component';

describe('ToolConfigComponent', () => {
  let component: ToolConfigComponent;
  let fixture: ComponentFixture<ToolConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
