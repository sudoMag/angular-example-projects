import { Component, Input, OnInit } from '@angular/core';
import Coin from '../../icoin';
import { CryptoDataService } from '../services/crypto-data.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
})
export class CoinComponent implements OnInit {
  @Input()
  coin!: Coin;
  @Input()
  loading?: boolean;
  constructor(private cryptoService: CryptoDataService) {}

  ngOnInit(): void {
    if (!this.loading && this.coin) {
      this.coin = {
        ...this.coin,
        sparkerline: this.cryptoService.getSparkerlineTo(this.coin),
      };
    }
  }
}
