import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent, ChunkPipe} from './components/calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent, ChunkPipe],
  imports: [
    CommonModule],
  exports: [CalendarComponent]
})
export class CalendarModule {}
