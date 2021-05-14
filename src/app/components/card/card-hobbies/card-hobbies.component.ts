import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-hobbies',
  templateUrl: './card-hobbies.component.html',
  styleUrls: ['./card-hobbies.component.scss']
})
export class CardHobbiesComponent implements OnInit {

  @Input() hobby: {
    name: string,
    gif: string,
    description: string
  } = {
    name: 'Ride Bicycle',
    gif: 'https://media.giphy.com/media/DAkTj5U6okQY8/source.gif',
    description: 'I really like cycling. I try to do it 2 times a week. I specifically like mountain bike.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
