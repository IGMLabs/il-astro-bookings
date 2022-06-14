import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsPage } from './bookings.page';

const routes: Routes = [
  { path: '', component: BookingsPage },
  {
    path: 'booking/new',
    loadChildren: () =>
      import('./new-booking/new-booking.module').then((m) => m.NewBookingModule),
  },
  {
    path: 'booking/:id',
    loadChildren: () => import('./booking/booking.module').then((m) => m.BookingModule),
  },
  { path: 'booking/:id', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'booking/new', loadChildren: () => import('./new-booking/new-booking.module').then(m => m.NewBookingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
