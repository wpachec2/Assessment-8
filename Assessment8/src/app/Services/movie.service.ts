import { Injectable } from '@angular/core';
import { Movie } from '../Models/movie';

/*
Create a service named “movie” service (i.e. MovieService class).
    MovieService contains an array of Movie objects called movies. 
    You must specify the TypeScript type on this array using the 
    Movie interface.
    The two objects in movies are the following:
      { title: "Toy Story", releaseYear: 1995 }
      { title: "Forrest Gump", releaseYear: 1994 }
    MovieService has a method named getMovies that takes no 
    parameters and returns the movies array.
*/

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return this.movies
  }

  movies: Movie[] = [
    {
      title: "Toy Story",
      releaseYear: 1995
    },
    {
      title: "Forrest Gump",
      releaseYear: 1994
    }
  ]
}
