import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleComponent } from './pages/toggle/toggle.component';
import { TdfComponent } from './pages/tdf/tdf.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'toggle', component: ToggleComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '**', redirectTo: 'toggle'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
