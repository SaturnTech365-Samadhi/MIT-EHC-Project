import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheets-create',
  templateUrl: './timesheets-create.component.html',
  styleUrls: ['./timesheets-create.component.scss']
})
export class TimesheetsCreateComponent implements OnInit {
  public visible = false;

constructor() {}

  ngOnInit(): void {
  }

  toggleTimeSlot() {
    this.visible = !this.visible;
  }

  handleTimeSlotChange(event: any) {
    this.visible = event;
  }
}
