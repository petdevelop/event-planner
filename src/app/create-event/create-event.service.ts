import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventsModel } from '../models/events.model';
import { Observable } from 'rxjs';
import { ItemsModel } from '../models/items.model';
import { EventDetailService } from '../event-detail/event-detail.service';
import { tap } from 'rxjs/operators';
import { EventsService } from '../events/events.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(
    private httpclient: HttpClient,
    private eventDetailService: EventDetailService,
    private eventsService: EventsService) { }

  public createEvent(event: EventsModel): Observable<any> {
    return this.httpclient.post(`${environment.url}/events`, event)
      .pipe(tap(_event => {
        this.eventsService.getEvents();
        this.eventDetailService.eventDetail$.next(new EventsModel(_event));
      }));
  }

  public createItem(item: ItemsModel): Observable<any> {
    const eventId = this.eventDetailService.eventDetail$.getValue().id;
    const _item = {...item, eventId: eventId};

    return this.httpclient.post(`${environment.url}/items`, _item)
      .pipe(tap(_ => this.eventsService.getItems()));
  }
}
