import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private location: Location ) {

  }

  selectedIndex = 0

  onTabClick(event) {
    console.log('ontabclick', event)
    if(event.index === 1) {
      this.location.replaceState("/animations");
    }
    if(event.index === 0) {
      this.location.replaceState("/home");
    }
  }

  ngOnInit() {
    if(this.location.path() === '/animations') {
      this.selectedIndex = 1
    }
  }


}
