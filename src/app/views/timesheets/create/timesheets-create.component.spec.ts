import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsCreateComponent } from './timesheets-create.component';

describe('TimesheetsCreateComponent', () => {
  let component: TimesheetsCreateComponent;
  let fixture: ComponentFixture<TimesheetsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
