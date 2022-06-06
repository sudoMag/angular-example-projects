import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [
    trigger('loadFade', [
      state('loading', style({
        opacity: 0,
      })),
      state('loaded', style({
        opacity: 1,
      })),
    ])
  ]
})
export class ImageComponent implements OnInit {
  isLoaded = false;

  @Input() src?: string;
  @Input() class?: string;
  @Input() style?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
