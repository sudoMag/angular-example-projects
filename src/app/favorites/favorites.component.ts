import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../componentes/cryptos-table/services/crypto-data.service';
import Coin from '../componentes/icoin';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  coins: Coin[] = [];
  noFavorites: boolean = false;
  showErrorMessage = false;

  constructor(private cryptoService: CryptoDataService) {}

  showErrorMesssage = (): void => {
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3000);
  };

  setCoins(): void {
    let items = window.localStorage.getItem('follow');
    if (items) {
      const following: string[] = JSON.parse(items);
      if (following.length !== 0) {
        console.log(following);
        this.cryptoService.getAll().then((res) => {
          if (res) {
            this.coins = res.filter((coin) => following.includes(coin.id));
          } else {
            this.showErrorMesssage();
            setTimeout(this.setCoins.bind(this), 10000);
          }
          console.log(this.coins);
        });
      } else if (following.length === 0){
        this.noFavorites = true;
      }
    }
  }

  ngOnInit(): void {
    this.setCoins();
  }
}
