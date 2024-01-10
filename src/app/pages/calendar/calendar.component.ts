import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent{
  now: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date(new Date().setDate(new Date().getDate() + 7));

  onValueChanged(e: any) {
    console.log(e.value);
    console.log(e.previousValue);
  }
}

