import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsModel } from '../../models/events.model';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';
import { EventDetailService } from 'src/app/event-detail/event-detail.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  public events$: Observable<Array<EventsModel>>;

  constructor(
    private eventsService: EventsService,
    private eventDetailService: EventDetailService,
    private router: Router) {

    this.events$ = this.eventsService.events$;
  }

  ngOnInit() {
    this.eventsService.getEvents();
  }

  onClick(event: EventsModel): void {
    this.eventDetailService.eventDetail$.next(event);
    this.router.navigateByUrl('/event-detail/general');
  }

}
