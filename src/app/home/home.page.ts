import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { BookingsApi } from '../core/api/bookings.api';
import { TripsApi } from '../core/api/trips.api';
import { Booking } from '../core/api/booking.interface';
import { Trip } from '../core/api/trip.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  public trips$: Observable<Trip[]>;
  public agencies$: Observable<Agency[]>;
  public bookings$: Observable<Booking[]>;

  public reloading = false

  constructor(private tripsApi: TripsApi, private agenciesApi: AgenciesApi,private bookingsApi: BookingsApi) {
    this.trips$ = tripsApi.getAll$();
    this.agencies$ = agenciesApi.getAll$();
    this.bookings$ = bookingsApi.getAll$();
   }

  public onReload() {
    this.trips$ = this.tripsApi.getAll$();
    this.agencies$ = this.agenciesApi.getAll$();
    this.bookings$ = this.bookingsApi.getAll$();
  }
  ngOnInit(): void {}
}
