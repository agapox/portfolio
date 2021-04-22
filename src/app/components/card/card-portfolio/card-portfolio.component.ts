import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BadgeType } from '../../badge/badge.component';

export interface Portfolio {
  show: boolean,
  img: {
    url: string,
    loaded: boolean
  },
  name: string,
  tech: string[],
  description: string[],
  url: string
}

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
  styleUrls: ['./card-portfolio.component.scss']
})
export class CardPortfolioComponent implements OnInit {

  badgeType: BadgeType = BadgeType.outlineWhite;

  @Input() portfolio: Portfolio = {
    show: true,
    img: {
      url: 'https://placeimg.com/500/400/any',
      loaded: false
    },
    name: 'Proyecto 1',
    tech: [
      'Angular', 'JavaScript', 'NodeJS', 'RxJS', 'NGXS', 'UX/UI', 'HTML', 'CSS', 'SASS'
    ],
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro perferendis obcaecati quos ullam possimus laudantium id eveniet et autem?',
      'Porro, architecto reprehenderit. Ab ratione suscipit alias a harum laudantium.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro perferendis obcaecati quos ullam possimus laudantium id eveniet et autem?',
      'Porro, architecto reprehenderit. Ab ratione suscipit alias a harum laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro perferendis obcaecati quos ullam possimus laudantium id eveniet et autem?'
    ],
    url: 'https:www.google.com'
  };

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.portfolio.tech)

  }

}
