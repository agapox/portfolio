import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerChange = false;

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
      url: '/resume'
    },
    {
      name: 'skills',
      url: '/skills'
    },
    {
      name: 'portfolio',
      url: '/portfolio'
    },
    {
      name: 'contact',
      url: '/contact'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  @HostListener('document:load')
  @HostListener('document:scroll')
  onScroll() {
    this.headerChange = false;
    let bodyScrollTop = document.documentElement.scrollTop;
    if (bodyScrollTop > 30) {
      this.headerChange = true;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
