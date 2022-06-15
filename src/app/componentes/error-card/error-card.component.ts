import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css'],
  animations: [
    trigger('visibility', [
      state('hide', style({
        transform: 'translate(0px, -400%)',
      })),
      transition('* => loaded', [
        animate('300ms')
      ]),
    ])
  ]
})
export class ErrorCardComponent implements OnInit {
  @Input()
  showCard? = false;

  constructor() { }

  ngOnInit(): void {
  }

}
