import { createAction } from '@reduxjs/toolkit';
import { mainOfferType } from '../pages/main-page/main-offer-type';
import { currentOfferType } from '../pages/offer-page/current-offer-type';
import { userData } from './api-actions';

const changeCity = createAction<string>('changeCity');
const showOffers = createAction<mainOfferType[]>('showOffers');
const loadOffers = createAction<mainOfferType[]>('loadOffers');
const requireAuthorization = createAction<string>('requireAuthorization');
const setError = createAction<string | null>('setError');
const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
const setUser = createAction<userData>('setUser');
const loadNearbyOffers = createAction<mainOfferType[]>('loadNearbyOffers');
const loadCurrentOffer = createAction<currentOfferType>('currentOffer');

export { changeCity, showOffers, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setUser, loadNearbyOffers, loadCurrentOffer };

