import { createReducer } from '@reduxjs/toolkit';
import { changeCity, showOffers, loadOffers, requireAuthorization, setError } from './action';
import { cities, AuthorizationStatus } from '../consts';
import { offers } from '../mocks/offers-mock';
import { mainOfferType } from '../pages/main-page/main-offer-type';
import { Nullable } from 'vitest';

type InitialStateType = {
  city: Nullable<string>;
  offers: mainOfferType[];
  authorizationStatus: string;
  error: string | null;
}
const initialState: InitialStateType = {
  city: cities[0],
  offers: offers,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffers, (state, action) => {
      state.offers = action.payload || [];
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload || [];
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
