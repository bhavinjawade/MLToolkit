import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxComponentComponent } from './toolbox-component.component';

describe('ToolboxComponentComponent', () => {
  let component: ToolboxComponentComponent;
  let fixture: ComponentFixture<ToolboxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
