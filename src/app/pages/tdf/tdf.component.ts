import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {
  user = new User();

  submitForm(evt: any) {
    console.log('Form Data>>', this.user);
  }

}
