import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title = 'Astro Bookings';
  public subtitle = 'Welcome on board';
  public author = 'Juan Moure';
  public authorUrl = 'http://spadejj.com';

  constructor() { }

  ngOnInit(): void {
  }

}
