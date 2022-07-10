import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './posts.class';

@Injectable({
  providedIn: 'root'
})
export class SangService {
  public API: string = 'https://jsonplaceholder.typicode.com/posts';
  public posts: Posts[] = [];
  constructor(
    public http: HttpClient
  ) { }

  getAllPosts() : Observable<Posts[]> {
    return this.http.get<Posts[]>(this.API);
  }


}
