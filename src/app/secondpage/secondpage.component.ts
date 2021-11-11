import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
