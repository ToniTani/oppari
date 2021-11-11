import { Component, OnInit } from '@angular/core';
import {FooterService} from './footer.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  message: any;

  constructor(private footerService: FooterService) { }

  ngOnInit(): any {
    AOS.init();
    this.footerService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
  showDialog() {
    this.footerService.confirmThis('Piditkö sivustosta?', () => {
      console.log('Kiitos');
    }, () => {
      console.log('Sadge');
    });
  }
  showDialog1() {
    this.footerService.confirmThis('Haluatko varmasti tilata hyytävimmät uutiset?', () => {
      console.log('Kiitos');
    }, () => {
      console.log('Sadge');
    });
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
