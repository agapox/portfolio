import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  person = {
    name: 'José Agapito Ramírez',
    fields: ['Agile', 'Scrum', 'UI', 'FrontEnd', 'Angular', 'React','Javascript'],
    descriptions: [
      `Blockchain and cryptocurrency enthusiast. Entrepreneur, passionate about business,
        its processes and their operation. I am a very empathic person, which makes me
        adapt easily to different situations and different people.`,
      `I currently work in technology as UI Developer | FrontEnd Developer, being a self-taught
        and curious person has helped me to learn and develop in this area. I have the faithful
        belief that we live in a very changing environment, for this reason I believe that we
        must be flexible, with critical thinking to make the right decisions, at work and personally.`,
      `Having experience in various areas (Retail, Food, Insurance, Finance, Advertising and Technology),
        makes me a very versatile person and with the necessary skills to adapt.`
    ],
    ocupations: [
      'UX/UI Designer',
      'FrontEnd Developer',
      'Project Manager'
    ],
    socialMedia: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/joseagapitoramirez01/',
        iconClass: 'fab fa-linkedin-in fa-2x'
      }
    ]
  };



  constructor() { }

  ngOnInit(): void {
  }

  getOcupations() {
  }

}
