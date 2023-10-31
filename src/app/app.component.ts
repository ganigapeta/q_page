import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'q_page';
  selectedNav: any;
  fileSizes = [10, 100, 1024, 10000, 100000, 10000000, 10000000000];
  largeFileSize = Math.pow(10, 15);


  headerData = {
    url: '../../../assets/quantela_logo.svg',
    alt: 'Quantela'
  };

  navList = [
    {
      id: 'toggle',
      name: 'Toggle',
      path: '/toggle'
    },
    {
      id: 'tdf',
      name: 'TDF',
      path: '/tdf'
    },
    {
      id: 'rf',
      name: 'Reactive Form',
      path: '/reactive-form'
    },
    // {
    //   id: 'account',
    //   name: 'Account',
    //   path: '/account',
    //   onAuth: true
    // }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  handleNavigate(event: any) {
    this.selectedNav = event;
  }
}