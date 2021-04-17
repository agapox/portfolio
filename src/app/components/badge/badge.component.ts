import { Component, Input, OnInit } from '@angular/core';

export enum BadgeType {
  default = 'badge-default',
  white = 'badge-white',
  blue = 'badge-blue',
  outlineWhite = 'badge-o-white',
  outlineBlue = 'badge-o-blue'
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() text: string = 'Default';
  @Input() type: BadgeType = BadgeType.default;

  constructor() { }

  ngOnInit(): void {
  }

  getTextClass() {

  }

}
