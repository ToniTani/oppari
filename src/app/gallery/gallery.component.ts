import { Component, OnInit } from '@angular/core';
import {Image} from './imagemodel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images = [
    {
      url: '../../assets/bullet.png',
    },
    {
      url: '../../assets/sword1.png',
    },
    {
      url: '../../assets/sword2.png',
    },


  ] as Array<Image>;

  constructor() { }

  ngOnInit(): void {
  }

}
