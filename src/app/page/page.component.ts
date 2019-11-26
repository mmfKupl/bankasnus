import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit {
  fragment: string;
  isContentInit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sts: ScrollToService
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.toFragment();
    });
  }

  ngAfterViewInit(): void {
    this.isContentInit = true;
  }

  toFragment() {
    if (this.isContentInit) {
      if (this.fragment) {
        this.router.navigate([this.router.url]);
        this.sts.scrollTo({
          target: this.fragment,
          duration: 1000,
          easing: 'easeOutElastic'
        });
        this.fragment = null;
      }
    } else {
      setTimeout(() => this.toFragment(), 200);
    }
  }
}
