import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }
