import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movies = this._movieService.getAllMovies();
    console.log(this.movies);
  }

}
