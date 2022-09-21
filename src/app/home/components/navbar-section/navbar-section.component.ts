import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss'],
})
export class NavbarSectionComponent implements OnInit {
  show: boolean = false;
  currentRoute?: string;
  constructor(public router: Router) {}

  ngOnInit(): void {}
  // scrollToTop() {
  //   this.router.navigate(['/', 'pages', 'blogs', 'latest']);
  //   window.scrollTo(0, 0);
  //   this.show = false;
  // }

  scrollToTop(targetedPage: string) {
    this.router.navigate([targetedPage]);
    window.scrollTo(0, 0);
  }

  scrollToElement(element: any): void {
    var ele = document.getElementById(element)?.offsetTop;
    if (ele) window.scrollTo(0, ele - 80);
  }

  scrollToHomeSections($elementId: any): void {
    this.router.events.subscribe((eve: any) => {
      if (eve instanceof NavigationEnd) {
        this.currentRoute = eve.url;
      }
    });
    if (this.currentRoute == '/') {
      this.scrollToElement($elementId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement($elementId);
        }, 0);
      });
    }
    this.show = false;
  }
}
