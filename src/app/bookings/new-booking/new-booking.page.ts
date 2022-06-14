import { Component, OnInit } from '@angular/core';
import { TripsApi } from '../../core/api/trips.api';
import { BookingsApi } from '../../core/api/bookings.api';
import { Booking } from '../../core/api/booking.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.css']
})
export class NewBookingPage implements OnInit {
  public trips$: Observable<Trip[]>;

  constructor(tripsApi: TripsApi, private bookingsApi: BookingsApi) {
    this.trips$ = tripsApi.getAll$();
  }

  public onSave(newBooking: Partial<Booking>) {
    this.bookingsApi.post$(newBooking).subscribe();
  }

  ngOnInit(): void {
  }

}
