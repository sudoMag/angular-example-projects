import { Component, OnInit } from '@angular/core';
import { New } from './news';
import { NewsDataService } from './services/news-data.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent implements OnInit {
  news: New[] = [];
  cardsNumber = new Array(10);
  errorMessage: boolean = false;

  constructor(private NewsService: NewsDataService) {}

  showErrorMesssage = () => {
    this.errorMessage = true;
    setTimeout(() => {this.errorMessage = false}, 3000);
  };

  setNews() {
    this.NewsService.getNews().then((res) => {
      console.log(res);
      if (res) {
        this.news = res.results;
      } else {
        this.showErrorMesssage();
        setTimeout(this.setNews.bind(this), 10000);
      }
    });
  }

  ngOnInit(): void {
    this.setNews();
  }
}
