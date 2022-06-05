import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  name: string;
  id: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

@Injectable({
  providedIn: 'root',
})
export class CryptoDataService {
  coins: Coin[] = [];

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<Coin[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
    }
}
