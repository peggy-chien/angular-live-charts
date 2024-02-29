import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";

import * as pricesActions from './prices.actions';

@Injectable()
export class PricesFacade {
  private store = inject(Store);

  getCryptoPrices() {
    this.store.dispatch(pricesActions.getCryptoPrices());
  }

  stopGettingCryptoPrices() {
    this.store.dispatch(pricesActions.stopGettingCryptoPrices());
  }
}
