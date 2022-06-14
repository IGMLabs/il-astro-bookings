import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgenciesList } from './components/agencies/agencies.list';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { TripsList } from './components/trips/trips.list';
import { BookingsList } from './components/bookings/bookings.list';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList, TripsList, BookingsList],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ReloadingComponent,
    AgenciesList,
    TripsList,
    BookingsList,
  ],
})
export class SharedModule {}
