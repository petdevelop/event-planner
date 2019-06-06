import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventsModel } from '../models/events.model';

@Injectable({
    providedIn: 'root'
})
export class EventDetailService {
    public eventDetail$ = new BehaviorSubject<EventsModel>(null);

    constructor() {}

}
