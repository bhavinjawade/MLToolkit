import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFilesBarComponentComponent } from './left-files-bar-component.component';

describe('LeftFilesBarComponentComponent', () => {
  let component: LeftFilesBarComponentComponent;
  let fixture: ComponentFixture<LeftFilesBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftFilesBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftFilesBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
