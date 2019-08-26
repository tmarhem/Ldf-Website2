import { Component, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { MatSidenav} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ldf-Website2';
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    public location: Location,
    ) { }

  goBack = (): void => {
    console.log('url', this.location.path());
    if ( this.location.path() === `/home`) {
      this.sidenav.toggle();
    } else {
      this.location.back();
    }
  }
}
