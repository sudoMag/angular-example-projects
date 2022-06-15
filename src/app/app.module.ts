import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { CryptosTableComponent } from './componentes/cryptos-table/cryptos-table.component';
import { CryptoDataService } from './componentes/cryptos-table/services/crypto-data.service';
import { ImageComponent } from './componentes/image/image.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CoinComponent } from './componentes/cryptos-table/coin/coin.component';
import { ErrorCardComponent } from './componentes/error-card/error-card.component';
import { ErrorCardService } from './componentes/error-card/error-card.service';
import { NewsDataService } from './news-page/services/news-data.service';
import { LikeButtonComponent } from './componentes/cryptos-table/coin/like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CryptosTableComponent,
    ImageComponent,
    NewsPageComponent,
    FavoritesComponent,
    CoinComponent,
    ErrorCardComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CryptoDataService, ErrorCardService, NewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
