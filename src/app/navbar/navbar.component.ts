import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  scrollingDown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollingDown = window.scrollY > 30;
  }
}
