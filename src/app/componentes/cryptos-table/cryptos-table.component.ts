import { Component, Input, OnInit } from '@angular/core';
import Coin from '../icoin';


@Component({
  selector: 'app-cryptos-table',
  templateUrl: './cryptos-table.component.html',
  styleUrls: ['./cryptos-table.component.css'],
})
export class CryptosTableComponent implements OnInit {
  @Input()
  coins!: Coin[];

  @Input()
  loadError: boolean = false;
  constructor() {}
  numberCards = new Array(10);

  ngOnInit(): void {

  }
}
