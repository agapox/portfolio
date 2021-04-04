import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListAnimationleftTrigger } from 'src/app/animations/listAnimations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ListAnimationleftTrigger]
})
export class AboutComponent implements OnInit {

  profile = {
    name: 'José Agapito Ramírez',
    age: (new Date()).getFullYear() - (new Date(1982,2,29)).getFullYear(),
    roles: [
      { name: 'UX/UI Designer', icon: 'fas fa-paint-brush' },
      { name: 'FrontEnd Developer', icon: 'fas fa-code' },
      { name: 'Project Manager', icon: 'fas fa-tasks' }
    ],
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
    hobbies: [
      {
        name: 'Ride Bicycle',
        gif: 'https://media.giphy.com/media/DAkTj5U6okQY8/source.gif',
        description: 'I really like cycling. I try to do it 2 times a week. I specifically like mountain bike.'
      },
      {
        name: 'Play the guitar',
        gif: 'https://media.giphy.com/media/14xAw2hSwvhpC/source.gif',
        description: 'I love to play the guitar. I have played for years but that does not mean that I am an expert because I do it as a hobby and I had put the guitar aside for a while.'
      },
      {
        name: 'Get together',
        //gitf: 'https://media.giphy.com/media/3o6gEdtXJp2BwTFdi8/source.gif',
        gif: 'https://media.giphy.com/media/3o6gEdtXJp2BwTFdi8/source.gif',
        description: 'I really enjoy sharing with family and friends in casual meetings. i\'m a very social person and i like to chat a lot.'
      },
      {
        name: 'Listen good music!!',
        gif: 'https://media.giphy.com/media/3o6ZtjUZAD5Lf0QFLW/source.gif',
        description: 'I like listen rock music and all its variants.'
      },
      {
        name: 'Share memes',
        gif: 'https://media.giphy.com/media/icJi1WogcfJJu/source.gif',
        description: 'I also enjoy share memes in social media platforms :)'
      },
    ]
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
