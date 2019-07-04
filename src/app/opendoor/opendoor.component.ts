import { Component, OnInit } from '@angular/core';
import { data } from '../opendoor/pageData';
import { app } from '../opendoor/pageData';
import { tips } from './pageData'

@Component({
  selector: 'app-opendoor',
  templateUrl: './opendoor.component.html',
  styleUrls: ['./opendoor.component.sass']
})
export class OpendoorComponent implements OnInit {
  data = data;
  app = app;
  tips = tips;
  

  constructor() { }

  ngOnInit() {
  }

  
}
