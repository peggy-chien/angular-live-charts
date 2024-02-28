import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PricesFeature } from './prices.reducer';
import { PricesEffects } from './prices.effects';
import { PricesFacade } from './prices.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(PricesFeature),
    EffectsModule.forFeature(PricesEffects),
  ],
  providers: [
    PricesFacade
  ]
})
export class PricesStateModule { }
