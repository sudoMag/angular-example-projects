import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../../services/crypto-data.service';

interface Coin {
  name: string;
  id: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  sparkerline?: string;
}

@Component({
  selector: 'app-cryptos-table',
  templateUrl: './cryptos-table.component.html',
  styleUrls: ['./cryptos-table.component.css'],
})
export class CryptosTableComponent implements OnInit {
  constructor(private cryptoService: CryptoDataService) {}
  coins: Coin[] = [];
  numberCards = new Array(10);

  ngOnInit(): void {
    this.cryptoService.getAll().subscribe((res) => {
      this.coins = res.map<Coin>((coin): Coin => {
        return {
          ...coin,
          sparkerline: this.cryptoService.getSparkerlineTo(coin),
        };
      });
      console.log(this.coins);
    });
  }
}
