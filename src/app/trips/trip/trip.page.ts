import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css']
})
export class TripPage implements OnInit {

  public tripId : string;
  public trip$: Observable<Trip>;

  constructor(route: ActivatedRoute, tripsApi: TripsApi) {
    this.tripId = route.snapshot.paramMap.get('id') || '';
    this.trip$ = tripsApi.getById$(this.tripId);
  }

  ngOnInit(): void {
  }

}
