import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //isUserLogin: boolean = false;
  @Input() isUserLogin = false;
  @Output() onAnyAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const tokenVal = localStorage.getItem('token');
    this.isUserLogin = !!tokenVal;
  }

  actionHandler(eventName: string) {
    if (eventName === 'LOGIN') {
      this.isUserLogin = true;
    } else if (eventName === 'LOGOUT') {
      this.isUserLogin = false;
      localStorage.removeItem('token');
    }
    this.onAnyAction.emit(eventName);
  }

}
