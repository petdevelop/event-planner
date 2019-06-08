import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsModel } from 'src/app/event-detail/items/items.model';
import { EventsService } from 'src/app/events/events.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  public items$: Observable<Array<ItemsModel>>;

  constructor(
    public eventsService: EventsService,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.items$ = this.eventsService.items$;
    this.eventsService.getItems();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your item has been deleted.',
      duration: 2000
    });
    toast.present();
  }

  public deleteItem(item: ItemsModel): void {
    this.eventsService.deleteItem(item._id)
      .subscribe(r => {
        if (r.deletedCount === 1) {
          this.presentToast();
          this.router.navigateByUrl('/create-event/items');
        }
      });
  }

}
