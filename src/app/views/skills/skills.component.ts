import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  techEvoList: {
    label: string,
    value: number
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.techEvoList.push({
      label: 'HTML',
      value: 90
    });
    this.techEvoList.push({
      label: 'CSS',
      value: 85
    });
    this.techEvoList.push({
      label: 'Javascript',
      value: 75
    });
    this.techEvoList.push({
      label: 'Angular',
      value: 70
    });
  }

}
