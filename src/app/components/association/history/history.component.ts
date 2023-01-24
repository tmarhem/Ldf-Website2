import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  fragment: any;

  constructor(public route: Router){ }


   ngOnInit(): void {
    document.querySelector('#timeline-content').scrollIntoView();
   }



}
