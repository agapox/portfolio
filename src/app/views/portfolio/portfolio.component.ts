import { Component, OnInit } from '@angular/core';
import { ListAnimationleftTrigger, BgImageZoomInAnimationTrigger } from 'src/app/animations/listAnimations';

interface Portfolio {
  img: string,
  name: string,
  tech: string[],
  description: string[],
  url: string
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [ListAnimationleftTrigger, BgImageZoomInAnimationTrigger]
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio[] = [];
  portfolioSelected: number = -1;

  public startBgImgAnim = false

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.portfolio.push({
      img: 'https://placeimg.com/500/400/any',
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
    });
    this.portfolio.push({
      img: 'https://placeimg.com/500/403/any',
      name: 'Proyecto 2',
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
    });
    this.portfolio.push({
      img: 'https://placeimg.com/500/401/any',
      name: 'Proyecto 3',
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
    });
    this.portfolio.push({
      img: 'https://placeimg.com/500/402/any',
      name: 'Proyecto 4',
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
