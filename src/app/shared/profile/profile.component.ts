import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isUserLogin: boolean = false;
  @Input() userInfo: any;
  @Output() onAnyAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const tokenVal = localStorage.getItem('token');
  }

  actionHandler(eventName: string) {
    this.onAnyAction.emit(eventName);
  }

}
