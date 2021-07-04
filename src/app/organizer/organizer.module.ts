import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizerComponent} from './components/organizer/organizer.component';
import {RouterModule} from '@angular/router';
import {CalendarModule} from '../shared/modules/calendar/calendar.module';

const routes = [
  {
    path: '',
    component: OrganizerComponent,
  },
];

@NgModule({
  declarations: [OrganizerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule
  ]
})
export class OrganizerModule {}
