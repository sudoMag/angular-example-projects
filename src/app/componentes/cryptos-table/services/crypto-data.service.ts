import { Injectable } from '@angular/core';
import Coin from '../../icoin';
@Injectable({
  providedIn: 'root',
})
export class CryptoDataService {
  coins: Coin[] = [];

  constructor() {}

  keloke() {}

  async getAll() {
    const response: Coin[] = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
    )
      .then((res) => {
        return res.json();
      })
      .catch(() => {
        console.error('error Papuh!!! :C');
      });
    return response;
  }

  getSparkerlineTo(coin: Coin) {
    const apiCoinId = coin.image.split('/')[5];
    return `https://www.coingecko.com/coins/${apiCoinId}/sparkline`;
  }
}
