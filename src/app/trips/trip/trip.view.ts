import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip.view.html',
  styleUrls: ['./trip.view.css']
})
export class TripView implements OnInit {

  @Input() public tripId! : string;
  @Input() public trip?: Trip

  constructor() { }

  ngOnInit(): void {
  }

}
