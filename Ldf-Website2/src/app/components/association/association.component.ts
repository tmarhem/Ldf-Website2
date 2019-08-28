import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})

export class AssociationComponent {
  constructor() {
    console.log('here');
    // if (!window['fbAsyncInit']) {
      window['fbAsyncInit'] = function () {
          window['FB'].init({
              appId: '2176767399269409',
              autoLogAppEvents: true,
              xfbml: true,
              version: 'v3.0'
          });
      };
  // }
  }

}
