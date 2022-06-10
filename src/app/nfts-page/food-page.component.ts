import { Component, OnInit } from '@angular/core';
import { New } from './Recipe';
import { FoodDataService } from './services/food-data.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  news: New[] = [];
  cardsNumber = new Array(10);

  constructor(private nftsService: FoodDataService) { }


  ngOnInit(): void {
    this.nftsService.getNews().subscribe(res => {
      console.log(res);
      this.news = res.results;
    })
  }

}
