import { Component, OnInit } from '@angular/core';
import { EventDetailService } from '../event-detail.service';
import { EventsModel } from 'src/app/models/events.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  public eventDetail$: Observable<EventsModel>;

  constructor(
    private eventDetailService: EventDetailService) { }

  ngOnInit() {
    this.eventDetail$ = this.eventDetailService.eventDetail$;
  }

}
