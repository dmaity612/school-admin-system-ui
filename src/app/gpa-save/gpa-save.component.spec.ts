import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaSaveComponent } from './gpa-save.component';

describe('GpaSaveComponent', () => {
  let component: GpaSaveComponent;
  let fixture: ComponentFixture<GpaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
