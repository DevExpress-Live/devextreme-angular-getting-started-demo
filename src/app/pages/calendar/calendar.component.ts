import { Component, ViewChild } from '@angular/core';
import { DxCalendarComponent } from 'devextreme-angular';
import { CalendarSelectionMode } from 'devextreme/ui/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild(DxCalendarComponent, { static: false })
  calendar!: DxCalendarComponent;
  selectionMode: CalendarSelectionMode = 'multiple';
  value: any = [
    new Date(),
    new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
  ];
  startDate: Date = new Date();
  endDate: Date = new Date(new Date().setDate(new Date().getDate() + 7));

  onValueChanged(e: any) {
    console.log(e.value);
    console.log(e.previousValue);
  }
}
