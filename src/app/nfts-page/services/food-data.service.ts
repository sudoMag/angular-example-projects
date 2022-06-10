import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Results } from '../Recipe';


@Injectable({
  providedIn: 'root',
})
export class FoodDataService {
  private NEWS_API_KEY = environment.NEWS_API_KEY;

  constructor(private http: HttpClient) {}

  getNews() {
    const mock = {}
    const endPoint = "/news";
    const language = '&language=es,en';
    const category = "&category=business,technology,world"
    const keyWords = "&q=crypto%20OR%20criptomonedas%20OR%20blockchain"
    const fetchURL = `https://newsdata.io/api/1${endPoint}?apikey=${this.NEWS_API_KEY}${language + category + keyWords}`;
    return this.http.get<Results>(fetchURL);
  }
}
