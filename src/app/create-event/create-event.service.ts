import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventsModel } from '../models/events.model';
import { Observable } from 'rxjs';
import { ItemsModel } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(private httpclient: HttpClient) { }

  public createEvent(event: EventsModel): Observable<any> {
    return this.httpclient.post(`${environment.url}/events`, event);
  }

  public createItem(item: ItemsModel): Observable<any> {
    return this.httpclient.post(`${environment.url}/items`, item);
  }
}
