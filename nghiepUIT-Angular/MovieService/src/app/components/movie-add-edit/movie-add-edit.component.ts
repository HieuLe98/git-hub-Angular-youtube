import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.class';

@Component({
  selector: 'app-movie-add-edit',
  templateUrl: './movie-add-edit.component.html',
  styleUrls: ['./movie-add-edit.component.css']
})
export class MovieAddEditComponent implements OnInit {

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  addVideo( name: string, link: string, author: string ) {
    let movie = new Movie(0, name, link, author);
    this._movieService.addMovie(movie);
  }
}
