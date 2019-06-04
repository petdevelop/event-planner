import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsModel } from '../events.model';
import { EventsService } from '../events.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  public events$: Observable<Array<EventsModel>>;

  constructor(
    private eventsService: EventsService) {

    this.events$ = this.eventsService.events$;
  }

  ngOnInit() {
    this.eventsService.getEvents();
  }

}
