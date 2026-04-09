import { createReducer } from '@reduxjs/toolkit';
import { changeCity, showOffers, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setUser, loadNearbyOffers, loadCurrentOffer } from './action';
import { cities, AuthorizationStatus } from '../consts';
// import { offers } from '../mocks/offers-mock';
import { mainOfferType } from '../pages/main-page/main-offer-type';
import { Nullable } from 'vitest';
import { userData } from './api-actions';
import { currentOfferType } from '../pages/offer-page/current-offer-type';

type InitialStateType = {
  user: userData;
  city: Nullable<string>;
  offers: mainOfferType[];
  authorizationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
  nearbyOffers: mainOfferType[];
  currentOffer: Nullable<currentOfferType>;
}
const initialState: InitialStateType = {
  user: {},
  city: cities[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  nearbyOffers: [],
  currentOffer:null
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
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    });
});
