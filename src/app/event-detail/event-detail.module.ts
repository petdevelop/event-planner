import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventDetailPage } from './event-detail.page';
import { EventDetailPageRoutingModule } from './event-detail.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailPageRoutingModule
  ],
  declarations: [EventDetailPage]
})
export class EventDetailPageModule {}
