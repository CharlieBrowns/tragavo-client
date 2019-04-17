import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChiefComponent } from './components/e-chief/e-chief.component';
import { EventsRoutingModule } from './events-routing.module';
import { ListEventComponent } from './components/list-event/list-event.component';
import { ViewEventComponent } from './components/view-event/view-event.component';

@NgModule({
  declarations: [EChiefComponent, ListEventComponent, ViewEventComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EventsRoutingModule
  ],
})
export class EventsModule { }
