import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  userInfo: any;
  @Input() navList: any;
  @Input() selected: any;
  @Output() navigate = new EventEmitter();

  constructor(
    private authService: AuthService
  ) {
    this.authService.setUserInfoSub();
    this.authService.userInfo$.subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
  }

  navigateUrl(navItem: any) {
    this.navigate.emit(navItem);
  }
}
