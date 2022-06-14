import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css'],
})
export class TripsList implements OnInit {
  @Input() public trips: Trip[] = [];
  @Output() private reload = new EventEmitter();

  public reloading = false;

  public onReloadClick(list: string){
    this.reloading = true;
    this.reload.emit()
  }

  public getClassForStatus(status: string) {
    if (status === 'Confirmed') {
      return 'green';
    }
    return 'orange';
  }

  public getClassForPlaces(places: number) {
    if (places === 0) return 'sold-out';
    if (places < 8) return 'few-places';
    return '';
  }

  ngOnInit(): void {}
}
