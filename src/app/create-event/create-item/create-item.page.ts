import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateEventService } from '../create-event.service';
import { ItemsModel } from 'src/app/models/items.model';
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
      .createItem(this.form.value as ItemsModel)
      .subscribe(_ => {
        this.form.reset();
        this.presentToast();
      });
  }

}
