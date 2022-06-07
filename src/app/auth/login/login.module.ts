import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LoginForm } from './login.form';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LoginPage, LoginForm],
  imports: [CommonModule, LoginRoutingModule,SharedModule],
})
export class LoginModule {}
