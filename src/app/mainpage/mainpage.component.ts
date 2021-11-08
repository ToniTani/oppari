import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    AOS.init();
  }
}
