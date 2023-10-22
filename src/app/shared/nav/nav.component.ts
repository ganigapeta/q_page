import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() navList: any;
  @Input() selected: any;
  @Output() navigate = new EventEmitter();

  navigateUrl(navItem: any) {
    this.navigate.emit(navItem);
  }
}
