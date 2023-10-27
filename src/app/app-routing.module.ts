import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleComponent } from './pages/toggle/toggle.component';
import { TdfComponent } from './pages/tdf/tdf.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { AccountComponent } from './pages/account/account.component';
import { ChangePasswordComponent } from './pages/account/change-password/change-password.component';
import { UserDetailsComponent } from './pages/account/user-details/user-details.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'toggle', component: ToggleComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { 
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'user-details', component: UserDetailsComponent }
    ]
  },
  { path: '**', redirectTo: 'toggle'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
