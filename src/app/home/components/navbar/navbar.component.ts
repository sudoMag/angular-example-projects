import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('visibility', [
      state('hide', style({
        opacity: 0,
      })),
      state('show', style({
        opacity: 1,
      })),
      transition('hide <=> show', [
        animate('300ms')
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {
  showMenu = false;

  toggleMenu () {
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
