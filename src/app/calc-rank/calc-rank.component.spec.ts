import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcRankComponent } from './calc-rank.component';

describe('CalcRankComponent', () => {
  let component: CalcRankComponent;
  let fixture: ComponentFixture<CalcRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
