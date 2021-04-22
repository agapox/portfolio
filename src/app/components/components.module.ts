import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BadgeComponent } from './badge/badge.component';
import { CardBusinessComponent } from './card/card-business/card-business.component';
import { CardPortfolioComponent } from './card/card-portfolio/card-portfolio.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    BadgeComponent,
    CardBusinessComponent,
    CardPortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    BadgeComponent,
    CardBusinessComponent,
    CardPortfolioComponent
  ]
})
export class ComponentsModule { }
