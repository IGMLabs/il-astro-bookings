import { Component, OnInit } from '@angular/core';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  public trips$: Observable<Trip[]>;
  public error: Boolean=true;

  private subscriptor= {
    next : (data: Trip[]) =>{
      //this.agencies=data;
  },
    error: (err:Error) => {
    console.log('Hay un fallo', err.message);
    this.error=true
    },
  };

  constructor(private tripsApi: TripsApi) {
    this.trips$ = this.tripsApi.getAll$();
  }

  ngOnInit(): void {
  }

  onReload() {
    this.trips$ = this.tripsApi.getAll$();
  }
}
