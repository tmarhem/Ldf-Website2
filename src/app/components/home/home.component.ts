import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private location: Location, private _router: Router ) {

  }

  selectedIndex = 0

  onTabClick(event) {
    if(event.index === 1) {
      this._router.navigateByUrl("/animations");
    }
    if(event.index === 0) {
      this._router.navigateByUrl("/home");
    }
  }

  ngOnInit() {
    if(this.location.path() === '/animations') {
      this.selectedIndex = 1
    }
  }


}
