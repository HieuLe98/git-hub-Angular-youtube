import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private lazyLoadService: LazyLoadScriptService) { }

  ngOnInit(): void {
    this.lazyLoadService.loadScript('assets/js/main.js').subscribe(res => {
      console.log('Jquery is loaded!');
  });
  }

}
