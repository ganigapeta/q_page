import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerInfo: any;

  handleAction(event: any) {
    console.log('Event>>', event);
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
        // do action accordingly
        break;
      }
      case 'LOGIN': {
        localStorage.setItem('token', 'auhu33');
        break;
      }
   } 
  }

}
