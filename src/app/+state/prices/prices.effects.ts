import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, map } from "rxjs";

import * as pricesActions from './prices.actions';
import { PricesService } from "../../services/prices.service";

@Injectable()
export class PricesEffects {
  private actions$ = inject(Actions);
  private pricesService = inject(PricesService);

  getCryptoPrices$: Observable<void> = createEffect(() =>
    this.actions$.pipe(
      ofType(pricesActions.getCryptoPrices),
      map(() =>
        this.pricesService.connectCryptoSocket()
      )
    ), { dispatch: false }
  );
}
