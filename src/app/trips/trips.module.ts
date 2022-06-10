import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsPage } from './trips.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TripsPage
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    SharedModule
  ]
})
export class TripsModule { }
