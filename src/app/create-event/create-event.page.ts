import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateEventService } from './create-event.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private createEventService: CreateEventService,
    private router: Router,
    private toastController: ToastController,) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your event has been created.',
      duration: 2000
    });
    toast.present();
  }

  public submit(): void {
    this.createEventService.createEvent(this.form.value)
      .subscribe(_ => {
        this.router.navigate(['/event-detail/items']);
        this.presentToast();
      });
  }

}
