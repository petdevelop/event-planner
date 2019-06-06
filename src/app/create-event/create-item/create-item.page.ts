import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateEventService } from '../create-event.service';
import { ItemsModel } from 'src/app/models/items.model';
import { EventsService } from 'src/app/events/events.service';
import { EventDetailService } from 'src/app/event-detail/event-detail.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.page.html',
  styleUrls: ['./create-item.page.scss'],
})
export class CreateItemPage implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private createEventService: CreateEventService,
    private eventDetailService: EventDetailService,
    private eventsService: EventsService,
    private toastController: ToastController) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your item has been saved.',
      duration: 2000
    });
    toast.present();
  }


  submit() {
    this.createEventService
      .createItem({...this.form.value, eventId: this.eventDetailService.eventDetail$.getValue().id} as ItemsModel)
      .subscribe(_ => {
        this.form.reset();
        this.eventsService.getItems(this.eventDetailService.eventDetail$.getValue().id);
        this.presentToast();
      });
  }

}
