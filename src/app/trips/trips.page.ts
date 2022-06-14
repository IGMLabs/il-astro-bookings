import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css'],
})
export class TripsPage implements OnInit {
  public trips$: Observable<Trip[]>;

  constructor(private tripsApi: TripsApi) {
    this.trips$ = this.tripsApi.getAll$();
  }

  ngOnInit(): void {
  }

  onReload() {
    this.trips$ = this.tripsApi.getAll$();
  }
}
