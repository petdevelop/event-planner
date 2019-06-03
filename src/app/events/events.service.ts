import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';
import { EventsModel } from './events.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    public events$ = new BehaviorSubject<Array<EventsModel>>(null);

    constructor(private httpclient: HttpClient) {}

    getEvents(): void {
         this.httpclient.get(`${environment.url}/events`)
            .pipe(
                first(),
                map((m: Array<any>) => m.map(l => new EventsModel(l._id, l.user, l.description, l.date, l.location))),
                tap(t => this.events$.next(t)),
            ).subscribe();
    }
}
