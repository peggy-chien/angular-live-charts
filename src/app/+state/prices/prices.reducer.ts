import { createFeature, createReducer } from "@ngrx/store";

interface PricesState {}

const initialState: PricesState = {};

export const PricesFeature = createFeature({
  name: 'prices',
  reducer: createReducer(
    initialState
  )
});
