import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private lazyLoadService: LazyLoadScriptService, private router: Router) { }

  ngOnInit(): void {
    this.lazyLoadService.loadScript('assets/js/main.js').subscribe(res => {
      console.log('Jquery is loaded!');
    });
    this.router.events.forEach((evt) => {
      if (evt instanceof NavigationEnd) {
        this.lazyLoadService.loadScript('assets/js/main.js').subscribe(res => {
          console.log('Jquery is loaded!');
        });
      }
    })
  }

}
