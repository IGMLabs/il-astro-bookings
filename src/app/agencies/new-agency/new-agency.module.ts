import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAgencyRoutingModule } from './new-agency-routing.module';
import { NewAgencyPage } from './new-agency.page';
import { NewAgencyForm } from './new-agency.form';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NewAgencyPage,
    NewAgencyForm
  ],
  imports: [
    CommonModule,
    NewAgencyRoutingModule,
    SharedModule
  ]
})
export class NewAgencyModule { }
