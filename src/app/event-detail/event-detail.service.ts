import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventsModel } from '../events/events.model';

@Injectable({
    providedIn: 'root'
})
export class EventDetailService {
    public eventDetail$ = new BehaviorSubject<EventsModel>(null);

    constructor() {}

}
