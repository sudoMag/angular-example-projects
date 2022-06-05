import { Component, OnInit, ViewChild } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild(NavbarComponent)
  child!: NavLinkComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
