import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { ContactForm } from './contact.form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactPage, ContactForm],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule],
})
export class ContactModule {}
