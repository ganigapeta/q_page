import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  toggleInputShow: boolean = false;
  inputVal = '';
  atendees = [
    {
      id: 1,
      name: 'Kishore'
    }, {
      id: 2,
      name: 'Sitaram'
    }, {
      id: 3,
      name: 'Guru'
    }, {
      id: 4,
      name: 'Kishan'
    }
  ];

  clickonBtn() {
    this.toggleInputShow = !this.toggleInputShow;
  }

  changeValue() {
    let firstOne: any = this.atendees.find((a: any) => a.id === 1);
    firstOne.name = "something";
    this.atendees = [ firstOne, ...this.atendees.filter((a: any) => a.id !== 1) ];
  }
}
