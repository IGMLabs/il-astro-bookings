import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';
import { BookingsApi } from '../../../core/api/bookings.api';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {
  bookings: Booking[] = [];
  public reloading = false;
  constructor(bookingsApi:BookingsApi) {
    bookingsApi.getAll$().subscribe((bookings)=>(this.bookings = bookings));
  }
  public reload(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }

  ngOnInit(): void {
  }

}
