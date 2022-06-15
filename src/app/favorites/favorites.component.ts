import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../componentes/cryptos-table/services/crypto-data.service';
import Coin from '../componentes/icoin';

interface Following {
  coins: string[];
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  coins: Coin[] = [];
  errorMessage = false;

  constructor(private cryptoService: CryptoDataService) {}

  showErrorMesssage = () => {
    this.errorMessage = true;
    setTimeout(() => {
      this.errorMessage = false;
    }, 3000);
  };

  setCoins() {
    let items =
      window.localStorage.getItem('follow') ||
      `{"coins": [
        "bitcoin"
      ]}`;
    if (items) {
      const following: Following = JSON.parse(items);
      if (following.coins.length !== 0) {
        console.log(following);
        this.cryptoService.getAll().then((res) => {
          if (res) {
            this.coins = res.filter((coin) =>
              following.coins.includes(coin.id)
            );
          } else {
            this.showErrorMesssage();
            setTimeout(this.setCoins.bind(this), 10000);
          }
          console.log(this.coins);
        });
      }
    }
  }

  ngOnInit(): void {
    this.setCoins();
    /*         this.cryptoService.getAll().subscribe((res) => {
      console.log(this.coins);
    }); */
  }
}
