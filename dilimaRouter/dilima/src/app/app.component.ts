import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LazyLoadScriptService } from './lazy-load-script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dilima';
  constructor(private lazyLoadService: LazyLoadScriptService, private router: Router) {}
  ngOnInit(): void {
    this.lazyLoadService.loadScript('assets/js/main.js').subscribe(res => {
      console.log('Jquery is loaded!');
      this.router.events.forEach((evt) => {
        if (evt instanceof NavigationEnd) {
          this.lazyLoadService.loadScript('assets/js/main.js').subscribe(res => {
            console.log('Jquery is loaded!');
          });
        }
      })
  });
  }

}
