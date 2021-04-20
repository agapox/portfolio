import { Component, Input, OnInit } from '@angular/core';
import { BadgeType } from '../../badge/badge.component';

@Component({
  selector: 'app-card-business',
  templateUrl: './card-business.component.html',
  styleUrls: ['./card-business.component.scss']
})
export class CardBusinessComponent implements OnInit {

  badgeType: BadgeType = BadgeType.outlineBlue;

  @Input() profile: {
    name: string,
    age: number,
    picture: string,
    roles: { name: string, icon: string }[],
    skills: string[]
  } = {
    name: 'José Agapito Ramírez',
    age: (new Date()).getFullYear() - (new Date(1982,2,29)).getFullYear(),
    picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQE2ZfGKPdxYvw/profile-displayphoto-shrink_800_800/0/1615221953948?e=1622678400&v=beta&t=YGXjXunsib3F3jMCQuzTh-4KBSD_HQXLSybpkDPmKuc',
    roles: [
      { name: 'UX/UI Designer', icon: 'fas fa-paint-brush' },
      { name: 'FrontEnd Developer', icon: 'fas fa-code' },
      { name: 'Project Manager', icon: 'fas fa-tasks' }
    ],
    skills: ['Agile', 'Scrum', 'UX/UI', 'FrontEnd', 'Angular', 'React', 'Javascript', 'NodeJs', 'HTML5', 'CCS3', 'SASS', 'LESS'],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
