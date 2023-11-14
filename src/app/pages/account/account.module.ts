import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MoviesComponent } from "./movies/movies.component";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'movie/add', component: AddMovieComponent },
      { path: ':id/details', component: UserDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    MoviesComponent,
    ChangePasswordComponent,
    UserDetailsComponent,
    AddMovieComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})

export class AccountModule { }