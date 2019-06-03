import { BehaviorSubject } from 'rxjs';
import { EventsService } from '../events/events.service';
import { Injectable } from '@angular/core';
import { EventsModel } from '../events/events.model';

@Injectable({
    providedIn: 'root'
})
export class EventDetailService {
    public eventDetail$ = new BehaviorSubject<EventsModel>(null);

    constructor(private eventsService: EventsService) {}

    public getEventDetail(eventId: string) {
        const event = this.eventsService.events$.getValue().find(f => f.id === eventId);
        this.eventDetail$.next(event);
    }
}
