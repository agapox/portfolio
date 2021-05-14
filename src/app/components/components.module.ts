import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BadgeComponent } from './badge/badge.component';
import { CardBusinessComponent } from './card/card-business/card-business.component';
import { CardPortfolioComponent } from './card/card-portfolio/card-portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { CardHobbiesComponent } from './card/card-hobbies/card-hobbies.component';

const components = [
  HeaderComponent,
  CardComponent,
  BadgeComponent,
  CardBusinessComponent,
  CardPortfolioComponent,
  FooterComponent,
  CardHobbiesComponent
];

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ...components ]
})
export class ComponentsModule { }
