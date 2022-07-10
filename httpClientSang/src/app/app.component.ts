import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Posts } from './posts.class';
import { SangService } from './sang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClientSang';
  public posts: Posts[] = [];
  public subscriptions!: Subscription;
  constructor(
    public sang: SangService
  ) {}

  ngOnInit() : void {
    this.subscriptions = this.sang.getAllPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }
}
