import { FacebookModule, FacebookService, InitParams } from 'ngx-facebook';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss'],
})

export class AssociationComponent implements OnInit {
  constructor(public fb: FacebookService) {
    fb.init({
      appId: '2176767399269409',
      xfbml: true,
      version: 'v5.0'
    });

  }
      ngOnInit(): void {
      }

}
