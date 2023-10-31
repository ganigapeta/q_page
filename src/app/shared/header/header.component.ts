import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo: any;
  @Input() headerInfo: any;

  constructor(
    private authService: AuthService,
    private _router: Router
  ) { 
    this.userInfo = this.authService.getUserInfoStorage();
  }

  handleAction(event: any) {
    switch(event) { 
      case 'PROFILE': { 
         this._router.navigate(['account', this.userInfo.id, 'details']);
         break; 
      } 
      case 'EDIT': { 
         // do action accordingly
         break; 
      } 
      case 'LOGOUT': {
        this.authService.logout();
        this.userInfo = this.authService.getUserInfoStorage();
        break;
      }
      case 'LOGIN': {
        this.authService.login().subscribe(() => {
          this.userInfo = this.authService.getUserInfoStorage();
        });
        break;
      }
   } 
  }

}
