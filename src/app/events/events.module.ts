import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import { EventsPageRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
  ],
  declarations: [
    EventsPage
  ]
})
export class EventsPageModule {}
