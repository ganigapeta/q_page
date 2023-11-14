import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Observable, mergeMap, forkJoin, from, concatMap, map, tap, switchMap, mergeAll } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$ = new Observable<any>;
  constructor(
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.movies$ = this._movieService.getAll().pipe(
      mergeMap((movies: any) =>
        forkJoin(
          movies.map((movie: any) =>
            this._movieService.getImage(movie.image_id).pipe(map((src) => ({ ...movie, ...src })))
          )
        )
      )
    );
  }
}
