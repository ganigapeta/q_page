import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleComponent } from './pages/toggle/toggle.component';
import { TdfComponent } from './pages/tdf/tdf.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'toggle', component: ToggleComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  { path: '**', redirectTo: 'toggle' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
