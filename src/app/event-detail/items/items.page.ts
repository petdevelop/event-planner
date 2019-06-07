import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsModel } from 'src/app/models/items.model';
import { EventsService } from 'src/app/events/events.service';
import { EventDetailService } from '../event-detail.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  public items$: Observable<Array<ItemsModel>>;

  constructor(
    public eventsService: EventsService,
    private eventDetailService: EventDetailService) { }

  ngOnInit() {
    this.items$ = this.eventsService.items$;
    this.eventsService.getItems(this.eventDetailService.eventDetail$.getValue().id);

    this.items$.subscribe(r => console.log(r));
  }

  public deleteItem(item: ItemsModel): void {
    this.eventsService.deleteItem(item.id)
      .subscribe(r => {
        console.log(r);
      });
  }

}
