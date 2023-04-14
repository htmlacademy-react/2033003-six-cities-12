import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].selectedOffer;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const isOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getFavoriteOffers = createSelector(getOffers,
  (offers) => offers.filter((offer) => offer.isFavorite));
