import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Results } from '../news';

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  private NEWS_API_KEY = environment.NEWS_API_KEY;

  constructor() {}

  async getNews() {
    const endPoint = '/news';
    const language = '&language=es,en';
    const category = '&category=business,technology,world';
    const keyWords = '&q=crypto%20OR%20criptomonedas%20OR%20blockchain';
    const fetchURL = `https://newsdata.io/api/1${endPoint}?apikey=${
      this.NEWS_API_KEY
    }${language + category + keyWords}`;

    const response: Results = await fetch(fetchURL)
      .then((res) => {
        return res.json();
      })
      .catch(() => {
        console.log('No se conectó Papuh');
      });

    return response;
  }
}
