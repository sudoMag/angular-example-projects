import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoDataService } from '../../services/crypto-data.service';

interface Coin {
  name: string;
  id: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

@Component({
  selector: 'app-cryptos-table',
  templateUrl: './cryptos-table.component.html',
  styleUrls: ['./cryptos-table.component.css'],
})
export class CryptosTableComponent implements OnInit {
  constructor(private cryptoService: CryptoDataService) {}
  coins: Coin[] = [];

  example = [
    {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 29898,
      price_change_percentage_24h: 0.44247,
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      image:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      current_price: 1809.88,
      price_change_percentage_24h: 1.69872,
    },
  ]

  ngOnInit(): void {
    this.cryptoService.getAll().subscribe((res) => {
      this.coins = res;
      console.log(res);
    });
  }
}
