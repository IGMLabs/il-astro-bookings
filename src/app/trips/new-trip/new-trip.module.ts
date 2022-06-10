import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTripRoutingModule } from './new-trip-routing.module';
import { NewTripPage } from './new-trip.page';
import { NewTripForm } from './new-trip.form';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewTripPage,
    NewTripForm
  ],
  imports: [
    CommonModule,
    NewTripRoutingModule,
    SharedModule
  ]
})
export class NewTripModule { }
