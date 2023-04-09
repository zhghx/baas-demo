import {Component} from '@angular/core';
import {ResolveStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test4m7dp1';

  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof ResolveStart) {
        if (event.url === "/page2") {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
