import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private lazyLoadService: LazyLoadScriptService) { }

  ngOnInit(): void {
    this.lazyLoadService.loadScript('assets/js/main.js').subscribe(res => {
      console.log('Jquery is loaded!');
  });
  }

}
