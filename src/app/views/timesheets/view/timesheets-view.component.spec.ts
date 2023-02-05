import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsViewComponent } from './timesheets-view.component';

describe('TimesheetsViewComponent', () => {
  let component: TimesheetsViewComponent;
  let fixture: ComponentFixture<TimesheetsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
