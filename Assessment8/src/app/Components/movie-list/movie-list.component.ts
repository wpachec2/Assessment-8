import { Component } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MovieService } from 'src/app/Services/movie.service';

/*
Create and display a component named movie-list.
    The component must have MovieService injected as a dependency.
    The component will have a property called movies that is 
    initialized to the array of movies from MovieService.
*/

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  constructor(private movieService: MovieService){}

  movies: Movie[] = [];

  ngOnInit(){
    this.movies = this.movieService.getMovies();
  }

}
