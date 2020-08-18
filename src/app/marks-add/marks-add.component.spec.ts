import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksAddComponent } from './marks-add.component';

describe('MarksAddComponent', () => {
  let component: MarksAddComponent;
  let fixture: ComponentFixture<MarksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
