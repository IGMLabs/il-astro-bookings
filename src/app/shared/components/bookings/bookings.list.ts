import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';
import { BookingsApi } from '../../../core/api/bookings.api';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {
  @Input() public bookings: Booking[] = [];
  @Output() private reload = new EventEmitter();

  public reloading = false;

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    // Para indicarle al padre que lo haga
    this.reload.emit();
  }

  ngOnInit(): void {
  }

}
