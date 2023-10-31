import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes = [
    { 
      path: '',
      component: AccountComponent,
      children: [
        { path: 'change-password', component: ChangePasswordComponent },
        { path: ':id/details', component: UserDetailsComponent }
      ]
    }
  ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class AccountModule {}