import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public fb: FacebookService) {
    fb.init({
      appId: '2176767399269409',
      xfbml: true,
      version: 'v5.0'
    });

  }
  ngOnInit() {
  }

}
