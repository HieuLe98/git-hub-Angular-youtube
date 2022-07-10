import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies: Movie[] = [
    new Movie(1, 'Lạc Trôi', 'https://www.youtube.com/watch?v=Llw9Q6akRo4', 'Sơn Tùng MTP'),
    new Movie(2, 'Hạnh Phúc Mới', 'https://www.youtube.com/watch?v=LfyKg7XjlJA', 'Sơn Tùng MTP'),
  ];

  constructor() { }

  getAllMovies() {
    return this.movies;
  }

  getLastID(movies: any) {
    let lastID = movies.length > 0 ? movies.sort((a: any,b: any) => {
      if(a.id > b.id) return -1;
      else if(a.id < b.id) return 1;
      else return 0;
    })[0].id + 1 : 1;
    console.log(movies);

    return lastID;
  }

  addMovie(movie: Movie) {
    movie.id = this.getLastID(this.movies);
    this.movies.push(movie);
  }
}
