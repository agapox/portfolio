import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentView: string = 'home';

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRouteClass();
  }

  getRouteClass() {
    this.router.events.subscribe(ev => {
      const route = this.location.path().split('/')[1];
      if (route !== this.currentView) {
        if (this.location.path() != "") {
          this.currentView = route
        } else {
          this.currentView = 'home'
        }
      }
    })
  }

}
