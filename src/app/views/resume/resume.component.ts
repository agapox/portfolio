import { Component, OnInit } from '@angular/core';
import { ListAnimationUpTrigger } from 'src/app/animations/listAnimations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    ListAnimationUpTrigger
  ]
})
export class ResumeComponent implements OnInit {

  experiences: {
    company: {
      name: string,
      img: string
    },
    positions: {
      name: string,
      description: string,
      date: {
        from: string,
        to: string,
        duration: string
      },
      location: string,
    }[]

  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.experiences.push({
      company: {
        name: 'SII Group Chile',
        img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEFujwbAGqyrA/company-logo_100_100/0/1611950904888?e=1625702400&v=beta&t=soxOlpDLIxh1intqEjgHFGLDhwVVKsSMU9gFNMEH71U'
      },
      positions: [{
        name: 'Prototyper & Front End Developer',
        description: 'Represent in code the views made by the BancoEstado UX team, working with agile methodologies to fulfill the sprints, respecting the UX - Prototyper - FrontEnd - BackEnd workflows. Technologies used: HTML, CSS, SASS, Angular, Nodejs.',
        date: {
          from: 'feb 2020',
          to: 'actualidad',
          duration: '1 año y 3 meses'
        },
        location: 'Santiago, Región Metropolitana de Santiago, Chile'
      }]
    });
    this.experiences.push({
      company: {
        name: 'SII Group Chile',
        img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEFujwbAGqyrA/company-logo_100_100/0/1611950904888?e=1625702400&v=beta&t=soxOlpDLIxh1intqEjgHFGLDhwVVKsSMU9gFNMEH71U'
      },
      positions: [{
        name: 'Prototyper & Front End Developer',
        description: 'Represent in code the views made by the BancoEstado UX team, working with agile methodologies to fulfill the sprints, respecting the UX - Prototyper - FrontEnd - BackEnd workflows. Technologies used: HTML, CSS, SASS, Angular, Nodejs.',
        date: {
          from: 'feb 2020',
          to: 'actualidad',
          duration: '1 año y 3 meses'
        },
        location: 'Santiago, Región Metropolitana de Santiago, Chile'
      }]
    });
    this.experiences.push({
      company: {
        name: 'SII Group Chile',
        img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEFujwbAGqyrA/company-logo_100_100/0/1611950904888?e=1625702400&v=beta&t=soxOlpDLIxh1intqEjgHFGLDhwVVKsSMU9gFNMEH71U'
      },
      positions: [{
        name: 'Prototyper & Front End Developer',
        description: 'Represent in code the views made by the BancoEstado UX team, working with agile methodologies to fulfill the sprints, respecting the UX - Prototyper - FrontEnd - BackEnd workflows. Technologies used: HTML, CSS, SASS, Angular, Nodejs.',
        date: {
          from: 'feb 2020',
          to: 'actualidad',
          duration: '1 año y 3 meses'
        },
        location: 'Santiago, Región Metropolitana de Santiago, Chile'
      }]
    });
  }

}
