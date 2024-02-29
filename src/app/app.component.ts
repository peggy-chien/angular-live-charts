import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricesStateModule } from './+state/prices/prices-state.module';
import { PricesFacade } from './+state/prices/prices.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PricesStateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-live-charts';
  private pricesFacade = inject(PricesFacade);

  ngOnInit(): void {
    this.pricesFacade.getCryptoPrices();
  }

  ngOnDestroy(): void {
    this.pricesFacade.stopGettingCryptoPrices();
  }

}
