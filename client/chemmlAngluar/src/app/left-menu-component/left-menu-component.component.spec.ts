import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponentComponent } from './left-menu-component.component';

describe('LeftMenuComponentComponent', () => {
  let component: LeftMenuComponentComponent;
  let fixture: ComponentFixture<LeftMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
