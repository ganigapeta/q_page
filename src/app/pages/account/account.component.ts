import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  userInfo;
  
  constructor(
    private authService: AuthService,
  ) {
    this.userInfo = this.authService.getUserInfoStorage();
  }
}
