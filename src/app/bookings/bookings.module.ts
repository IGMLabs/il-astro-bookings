import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsPage } from './bookings.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BookingsPage
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule
  ]
})
export class BookingsModule { }
