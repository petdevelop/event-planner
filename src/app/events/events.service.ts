import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';
import { EventsModel } from './events.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ItemsModel } from '../event-detail/items/items.model';
import { EventDetailService } from '../event-detail/event-detail.service';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    public events$ = new BehaviorSubject<Array<EventsModel>>(null);
    public items$ = new BehaviorSubject<Array<ItemsModel>>(null);

    constructor(
        private httpclient: HttpClient,
        private eventDetailService: EventDetailService) {}

    public getEvents(): void {
         this.httpclient.get(`${environment.url}/events`)
            .pipe(
                first(),
                map((m: Array<any>) => m.map(l => new EventsModel(l))),
                tap(t => this.events$.next(t)),
            ).subscribe();
    }

    public getItems(): void {
        const eventId = this.eventDetailService.eventDetail$.getValue()._id;

        this.httpclient.get(`${environment.url}/items/${eventId}`)
           .pipe(
               first(),
               map((m: Array<any>) => m.map(l => new ItemsModel(l))),
               tap(t => this.items$.next(t)),
           ).subscribe();
    }

    public deleteItem(itemId: string): Observable<any> {
        return this.httpclient.delete(`${environment.url}/items/${itemId}`)
            .pipe(tap(_ => this.getItems()));
    }
}
