import {Component, OnInit} from '@angular/core';
import {Carousel} from 'primeng/carousel';

interface Car {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-overwrite-page',
  templateUrl: './overwrite-page.component.html',
  styleUrls: ['./overwrite-page.component.scss']
})
export class OverwritePageComponent implements OnInit {

  cars: Car[] = [];

  constructor() {
    Carousel.prototype.onTouchEnd = function (e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    };

    Carousel.prototype.changePageOnTouch = function (e, diff) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    };

    Carousel.prototype.navForward = function (e, index?) {
      if (this.isCircular() || this._page < this.totalDots() - 1) {
        this.step(-1, index);
      }

      if (this.autoplayInterval) {
        this.stopAutoplay();
        this.allowAutoplay = false;
      }

      if (e && e.cancelable) {
        e.preventDefault();
      }
    };

  }

  ngOnInit() {
    this.cars = [
      {
        id: '1',
        name: 'Bugatti',
        description: 'Racing car',
        price: 800,
      },
      {
        id: '2',
        name: 'Ferrari',
        description: 'The Prancing Horse',
        price: 1500,
      },
      {
        id: '3',
        name: 'Porsche',
        description: 'Full spectrum',
        price: 10000,
      },
    ];
  }


}
