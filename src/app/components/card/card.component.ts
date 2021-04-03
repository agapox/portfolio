import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
