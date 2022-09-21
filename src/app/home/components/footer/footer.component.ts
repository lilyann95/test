import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { NgcCookieConsentService } from "ngx-cookieconsent";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentRoute?: string;
  facebookImg?: string = 'assets/images/icons/facebook.svg';
  instagramImg?: string = 'assets/images/icons/instagram-icon.svg';
  linkedInImg?: string = 'assets/images/footer/linked-in.svg';
  twitterImg?: string = 'assets/images/footer/twitter.svg';

  constructor(public router: Router) {}
  ngOnInit(): void {}
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
  }
  scrollToTop(targetedPage: string) {
    this.router.navigate([targetedPage]);
    window.scrollTo(0, 0);
  }
  scrollToElement(element: any): void {
    var elementTag = document.getElementById(element)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  revokeCookie() {
    //  this.ccService.fadeIn();
  }
}
