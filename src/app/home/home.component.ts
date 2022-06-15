import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../componentes/cryptos-table/services/crypto-data.service';
import Coin from 'src/app/componentes/icoin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  coins: Coin[] = [];
  errorMessage = false;

  constructor(private cryptoService: CryptoDataService) {}

  showErrorMesssage = () => {
    this.errorMessage = true;
    setTimeout(() => {this.errorMessage = false}, 3000);
  };

  setCoins() {
    /* console.log(this.cryptoService); */
    this.cryptoService.getAll().then((res?) => {
      if (res) {
        this.coins = res.map((coin): Coin => {
          return coin;
        });
      } else {
        this.showErrorMesssage();
        setTimeout(this.setCoins.bind(this), 10000);
      }
      /* console.log(this.coins); */
    });
  }

  ngOnInit(): void {
    this.setCoins();
  }
}
