import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { NavLinkComponent } from './home/components/nav-link/nav-link.component';
import { CryptosTableComponent } from './home/components/cryptos-table/cryptos-table.component';
import { CryptoDataService } from './home/services/crypto-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavLinkComponent,
    CryptosTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CryptoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
