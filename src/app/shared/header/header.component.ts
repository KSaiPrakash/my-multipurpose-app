import { Component, OnInit, OnChanges } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  public time;
  showDialog = false;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.time = moment().format('LLLL');
    console.log('this.time   ', this.time);
  }
}
