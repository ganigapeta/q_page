import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo: any;
  @Input() headerInfo: any;

  constructor(
    private authService: AuthService
  ) { 
    this.userInfo = this.authService.getUserInfo();
  }

  handleAction(event: any) {
    switch(event) { 
      case 'PROFILE': { 
         // do action accordingly 
         break; 
      } 
      case 'EDIT': { 
         // do action accordingly
         break; 
      } 
      case 'LOGOUT': {
        this.authService.logout();
        this.userInfo = this.authService.getUserInfo();
        break;
      }
      case 'LOGIN': {
        this.authService.login().subscribe(() => {
          this.userInfo = this.authService.getUserInfo();
        });
        break;
      }
   } 
  }

}
