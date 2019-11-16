import { Component, ViewChild, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatSidenav} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Ldf-Website2';
  @ViewChild('sidenav', { static: true}) sidenav: MatSidenav;
  imagesUrls=[
    '../assets/images/ldfbannerbackground.jpg',
    '../assets/images/background2.jpg',
    '../assets/images/background3.jpg',
    '../assets/images/background4.jpeg',
    '../assets/images/background5.jpeg',
    '../assets/images/background6.jpg',
    '../assets/images/background7.jpg',

  ]
  urls = [];

  constructor(
    public location: Location,
    ) { }

    ngOnInit(): void {
    }

  goBack = (): void => {
    console.log(`SIDENAV`, this.sidenav.opened);
    if ( this.location.path() === `/home`) {
      this.sidenav.toggle();
    } else {
      this.location.back();
    }
  }
}
