import { Component, OnInit } from '@angular/core';
import { ListAnimationUpTrigger } from 'src/app/animations/listAnimations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ListAnimationUpTrigger]
})
export class ContactComponent implements OnInit {

  socialMedia = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joseagapitoramirez01/',
      iconClass: 'fab fa-linkedin-in fa-3x'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
