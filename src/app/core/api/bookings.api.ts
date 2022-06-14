import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking.interface';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';

@Injectable({
  providedIn: 'root',
})
export class BookingsApi extends CrudApi<Booking> {
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'bookings', statusStore);
  }
}
