import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {Router} from "@angular/router";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';


// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-swiperdemo1-page',
  templateUrl: './swiperdemo1-page.component.html',
  styleUrls: ['./swiperdemo1-page.component.css']
})
export class Swiperdemo1PageComponent implements OnInit{

  data: any;

  constructor(private router: Router) {
  }

  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  ngOnInit(): void {
    this.data = [
      {
        name:"123123123"
      },
      {
        name:"123123123"
      },
      {
        name:"123123123"
      },
      {
        name:"123123123"
      },
      {
        name:"123123123"
      },
    ]
  }

  toBtn = () => {
    console.log(123123123);
    this.router.navigate(["page1"]);
  }
}
