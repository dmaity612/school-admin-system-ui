import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaMenuComponent } from './gpa-menu.component';

describe('GpaMenuComponent', () => {
  let component: GpaMenuComponent;
  let fixture: ComponentFixture<GpaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
