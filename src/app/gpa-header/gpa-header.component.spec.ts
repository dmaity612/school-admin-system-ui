import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaHeaderComponent } from './gpa-header.component';

describe('GpaHeaderComponent', () => {
  let component: GpaHeaderComponent;
  let fixture: ComponentFixture<GpaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
