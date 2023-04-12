import { AppRoute, AuthorizationStatus } from './../const';
import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { ReviewData } from '../types/review-data';

export const changeCity = createAction<string>('main/changeCity');
export const setOffers = createAction<Offer[]>('main/setOffers');
export const setSorting = createAction<string>('main/setSorting');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('data/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('login/redirectToRoute');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');
export const loadReviews = createAction<Review[]>('data/loadReviews');
export const addReview = createAction<ReviewData>('data/addReview');

