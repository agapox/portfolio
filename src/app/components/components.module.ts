import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BadgeComponent } from './badge/badge.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    BadgeComponent
  ]
})
export class ComponentsModule { }
