import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobileMenuOpen = false;

  navbarItems = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'about',
      url: '/about'
    },
    {
      name: 'resume',
      url: 'resume'
    },
    {
      name: 'skills',
      url: 'skills'
    },
    {
      name: 'portfolio',
      url: 'portfolio'
    },
    {
      name: 'contact',
      url: 'contact'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      console.log("menú abierto")
    } else {
      console.log("menú cerrado")
    }
  }

}
