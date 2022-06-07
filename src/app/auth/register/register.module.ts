import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { RegisterForm } from './register.form';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RegisterPage, RegisterForm],
  imports: [CommonModule, RegisterRoutingModule,SharedModule],
})
export class RegisterModule {}
