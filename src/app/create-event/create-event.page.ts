import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateEventService } from './create-event.service';
import { EventsService } from '../events/events.service';
import { Router } from '@angular/router';
import { EventDetailService } from '../event-detail/event-detail.service';
import { EventsModel } from '../models/events.model';

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
    private eventDetailService: EventDetailService) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
    });
  }


  ngOnInit() {
  }

  public submit(): void {
    this.createEventService.createEvent(this.form.value)
      .subscribe(event => {
        console.log(event);
        this.eventDetailService.eventDetail$.next(new EventsModel(event));
        this.router.navigate(['/event-detail/items']);
      });
  }

}
