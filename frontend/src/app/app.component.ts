import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeaderAndFooter = true;

  constructor(
    private authService: AuthService, private router: Router
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
  ).subscribe(event => this.modifyHeader(event));
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    setInterval(() => {
      this.authService.checkLogin();
    }, 300_000); // every five minutes
  }

  modifyHeader(location: any) { // This method is called many times
    if (location.url.slice(0, 3) === '/i/') {
        this.showHeaderAndFooter = false;
    } else {
        this.showHeaderAndFooter = true;
    }
}
}
