import { ContactComponent } from './contact/contact.component';
import { FacebookModule, FacebookService, InitParams } from 'ngx-facebook';
import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss'],
})

export class AssociationComponent implements OnInit {

  innerWidth: number;
  fbHeight: string;

  constructor(public fb: FacebookService, public dialog: MatDialog) {
    fb.init({
      appId: '2176767399269409',
      xfbml: true,
      version: 'v5.0'
    });
  }

  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  this.fbHeight = this.defineHeight();

}
      ngOnInit(): void {
        this.innerWidth = window.innerWidth;
        this.fbHeight = this.defineHeight();
      }

      defineHeight = (): string => {
        if (this.innerWidth < 1600) { return 'auto';} else if (this . innerWidth < 1920) { return '375px';} else { return '320px';}
      }

      openContactModal = () => {
        this.dialog.open(ContactComponent);
      }

}
