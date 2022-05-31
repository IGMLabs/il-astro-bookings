import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,FooterComponent],
})
export class CoreModule { }
