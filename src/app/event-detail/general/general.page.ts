import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetailService } from '../event-detail.service';
import { EventsModel } from 'src/app/events/events.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  public eventDetail$: Observable<EventsModel>;

  constructor(
    private route: ActivatedRoute,
    private eventDetailService: EventDetailService) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.eventDetailService.getEventDetail(p.id));

    this.eventDetail$ = this.eventDetailService.eventDetail$;
  }

}
