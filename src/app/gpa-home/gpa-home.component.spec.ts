import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaHomeComponent } from './gpa-home.component';

describe('GpaHomeComponent', () => {
  let component: GpaHomeComponent;
  let fixture: ComponentFixture<GpaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
