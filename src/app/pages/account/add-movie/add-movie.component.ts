import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../movies/movies.service';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  addForm: FormGroup;
  file: any;

  constructor(
    private _movieService: MoviesService,
    private _route: Router
  ) {
    this.addForm = this.createForm();
  }

  get f() {
    return this.addForm.controls;
  }

  createForm() {
    return new FormGroup({
      movie_title: new FormControl('', [ Validators.required ]),
      release_year: new FormControl('', [ Validators.required ])
   });
 }

 onChange(e: any) {
  this.file = e.target.files[0]; 
 }

 submitForm() {
  this._movieService.imageUpload(this.file).pipe(
    switchMap((imgRes: any) => this._movieService.create({
      ...this.addForm.value,
      image_id: imgRes.id
    })),
    tap(() => {
      this._route.navigate(['account/movies'])
    })
  ).subscribe();
}
}
