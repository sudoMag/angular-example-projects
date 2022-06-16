import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent implements OnInit {
  liked = false;

  @Input()
  coinId!: string;

  constructor() {}

  checkInLocalStorage() {
    let items = window.localStorage.getItem('follow');

    if (items) {
      let coins = JSON.parse(items);
      if (coins.includes(this.coinId)) {
        this.liked = true;
      } else {
        this.liked = false;
      }
    }
  }

  setInLocalStorage() {
    let items = window.localStorage.getItem('follow');

    if (!items) {
      window.localStorage.setItem('follow', `["${this.coinId}"]`);
      this.checkInLocalStorage();
    } else {
      let coins: string[] = JSON.parse(items);
      if (!coins.includes(this.coinId)) {
        window.localStorage.setItem(
          'follow',
          JSON.stringify([...coins, this.coinId])
        );
        this.checkInLocalStorage();
      } else {
        let coins: string[] = JSON.parse(items);
        window.localStorage.setItem(
          'follow',
          JSON.stringify(coins.filter((coin) => this.coinId !== coin))
        );
        this.checkInLocalStorage();
      }
    }
  }

  ngOnInit(): void {
    this.checkInLocalStorage();
  }
}
