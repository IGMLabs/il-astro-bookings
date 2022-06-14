import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Trip } from 'src/app/core/api/trip.interface';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';


@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {
  @Input() public trips: Trip[] = [];
  @Output() public save = new EventEmitter<Partial<Trip>>();

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private ts: TransformationsService
    ) {
      super(fms);
    this.form = formBuilder.group(
      {
        tripId: new FormControl('', [Validators.required]),
        passengerName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        luggageKilos: new FormControl(1, [
          Validators.required,
          Validators.min(1),
          Validators.max(20),
        ]),
        date: new FormControl(),
        hasPremiumFoodPrice: new FormControl(false),
      },
    );
  }

  public onSubmitClick() {
    const { tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice} = this.form.value;
    const id = this.ts.getDashId(tripId + ' ' + passengerName+ ' '+date);
    const newBookingData = { id, tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice, status: 'Waiting' };
    console.warn('Send trip data ', newBookingData);
    this.save.emit(newBookingData);
  }

  ngOnInit(): void {}

}
