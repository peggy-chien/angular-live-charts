import { createAction } from "@ngrx/store";

export const getCryptoPrices = createAction('[Prices] Get Crypto Prices');

export const stopGettingCryptoPrices = createAction('[Prices] Stop Getting Crypto Prices');
