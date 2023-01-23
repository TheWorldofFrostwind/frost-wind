import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.mobile') isMobile: boolean = false;
  @HostBinding('class.desktop') isDesktop: boolean = false;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.observer
      .observe('(max-width: 974px)')
      .pipe(map((value) => value.matches))
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
        this.isDesktop = !isMobile;
      });
  }
}
