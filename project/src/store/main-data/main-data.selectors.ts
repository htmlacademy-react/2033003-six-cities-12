import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, sortOffers } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { getLocationName, getSortingMethod } from '../main-process/main-process.selectors';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].selectedOffer;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const isOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getFavoriteOffers = createSelector(getOffers,
  (offers) => offers.filter((offer) => offer.isFavorite));
export const getFilteredAndSortedOffers = createSelector(
  [getLocationName, getSortingMethod, getOffers],
  (selectedCityName, selectedSortingMethod, offers) => {
    const filteredOffers: Offer[] = offers.filter((offer) => offer.city.name === selectedCityName);
    return sortOffers(filteredOffers, selectedSortingMethod);
  }
);
export const getCity = createSelector(
  [getFilteredAndSortedOffers, getLocationName],
  (filteredOffers, selectedCityName) =>
    filteredOffers.find((offer) => offer.city.name === selectedCityName)?.city ?? null
);