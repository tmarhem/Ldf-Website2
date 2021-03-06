import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatSidenav} from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ContactComponent } from './components/association/contact/contact.component';
import { Router, NavigationEnd } from '@angular/router';

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
    '../assets/images/background4.jpeg',
    '../assets/images/background5.jpeg',
    '../assets/images/background6.jpg',
    '../assets/images/background7.jpg',

  ]
  urls = [];

  constructor(
    public location: Location,
    public dialog: MatDialog,
    ) { }

    ngOnInit(): void {
      if ( this.location.path() === `/home` || this.location.path() === ``) {
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
    }

  goBack = (): void => {
    if ( this.location.path() === `/home`) {
      this.sidenav.toggle();
    } else {
      this.location.back();
    }
  }

  openContactModal = () => {
    this.dialog.open(ContactComponent);
  }


}
