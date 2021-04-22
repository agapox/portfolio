import { Component, OnInit } from '@angular/core';
import { ListAnimationleftTrigger, BgImageZoomInAnimationTrigger } from 'src/app/animations/listAnimations';
import { BadgeType } from 'src/app/components/badge/badge.component';
import { Portfolio } from 'src/app/components/card/card-portfolio/card-portfolio.component';
import { ICONSTOOLS } from 'src/assets/icons/icons.svg';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [ListAnimationleftTrigger, BgImageZoomInAnimationTrigger]
})
export class PortfolioComponent implements OnInit {

  iconTools = ICONSTOOLS;

  portfolio: Portfolio[] = [];
  portfolioSelected: number = -1;
  badgeType: BadgeType = BadgeType.outlineBlue;

  public startBgImgAnim = false;

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.portfolio.push({
      show: true,
      img: {
        url: 'https://placeimg.com/500/400/any',
        loaded: false
      },
      name: 'Proyecto 1',
      tech: [
        this.iconTools.HTML,
        this.iconTools.CSS,
        this.iconTools.SASS,
        this.iconTools.ANGULAR,
        this.iconTools.JAVASCRIPT,
        this.iconTools.JASMINE2,
        this.iconTools.KARMA
      ],
      description: [
        'Lorem ipsum dolor sit amet consectetur.',
        'Adipisicing elit placeat porro perferendis obcaecati quos.',
        'ullam possimus laudantium id eveniet et autem?',
      ],
      url: 'https:www.google.com'
    });
    this.portfolio.push({
      show: true,
      img: {
        url: 'https://placeimg.com/500/401/any',
        loaded: false
      },
      name: 'Proyecto 2',
      tech: [
        this.iconTools.HTML,
        this.iconTools.CSS,
        this.iconTools.SASS,
        this.iconTools.REACT,
        this.iconTools.NODEJS,
      ],
      description: [
        'Porro, architecto reprehenderit. Ab ratione suscipit alias a harum laudantium.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro perferendis.',
        'Perferendis obcaecati quos ullam possimus laudantium id eveniet et autem?',
      ],
      url: 'https:www.google.com'
    });
    this.portfolio.push({
      show: true,
      img: {
        url: 'https://placeimg.com/500/402/any',
        loaded: false
      },
      name: 'Proyecto 3',
      tech: [
        this.iconTools.HTML,
        this.iconTools.CSS,
        this.iconTools.SASS,
        this.iconTools.ANGULAR,
        this.iconTools.JAVASCRIPT,
        this.iconTools.JASMINE2
      ],
      description: [
        'Placeat porro perferendis obcaecati quos ullam possimus laudantium id eveniet et autem?',
        'Porro, architecto reprehenderit. Ab ratione suscipit alias a harum laudantium.'
      ],
      url: 'https:www.google.com'
    });
    this.portfolio.push({
      show: true,
      img: {
        url: 'https://placeimg.com/500/403/any',
        loaded: false
      },
      name: 'Proyecto 4',
      tech: [
        this.iconTools.HTML,
        this.iconTools.CSS,
        this.iconTools.SASS,
        this.iconTools.ANGULAR,
        this.iconTools.JAVASCRIPT,
        this.iconTools.JASMINE2
      ],
      description: [
        'Obcaecati quos ullam possimus laudantium id eveniet et autem? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Porro, architecto reprehenderit. Ab ratione suscipit alias a harum laudantium.',
        'Possimus laudantium id eveniet et autem? Ab ratione suscipit alias a harum laudantium. ',
        'Porro, architecto reprehenderit. Placeat porro perferendis obcaecati quos ullam possimus laudantium id eveniet et autem?'
      ],
      url: 'https:www.google.com'
    });
    this.loadedBgImg();
  }

  loadedBgImg() {
    this.portfolio.forEach(el => {
      const img = new Image();
      img.src = el.img.url;
      img.addEventListener('load', () => {
        el.img.loaded = true;
      });
    });
  }

  listAnimDone() {
    this.startBgImgAnim = true;
  }

  moreDetails(id: number) {
    // const portItem = document.getElementById(`portfolio-${id}`);
    // if (this.portfolioSelected !== -1) {
    //   const portItemOld = document.getElementById(`portfolio-${this.portfolioSelected}`);
    //   portItemOld?.classList.remove('portfolio-selected');
    // }
    // portItem?.classList.add('portfolio-selected');
    // this.portfolioSelected = id;
  }

}
