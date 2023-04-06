import { changeCity, setSorting, setOffers, filterAndSortOffers, resetState } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { SortType } from '../const';

const initialState: RootState = {
  locationName: 'Paris',
  sortingMethod: SortType.POPULAR,
  offers: offers
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetState, (state) => ({
      ...state,
      sortingMethod: SortType.POPULAR,
      offers: initialState.offers,
    }))
    .addCase(changeCity, (state, action) => {
      state.locationName = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      switch (action.payload) {
        case SortType.POPULAR:
          state.sortingMethod = SortType.POPULAR;
          break;
        case SortType.CHEAP:
          state.sortingMethod = SortType.CHEAP;
          break;
        case SortType.EXPENSIVE:
          state.sortingMethod = SortType.EXPENSIVE;
          break;
        case SortType.RATED:
          state.sortingMethod = SortType.RATED;
          break;
        default:
          break;
      }
    })
    .addCase(filterAndSortOffers, (state) => {
      const {locationName, sortingMethod } = state;

      let sortedOffers: Offer[] = offers.slice().filter((offer) => offer.city.name === locationName);

      switch (sortingMethod) {
        case SortType.CHEAP:
          sortedOffers = sortedOffers.slice().sort((a, b) => a.price - b.price);
          break;
        case SortType.EXPENSIVE:
          sortedOffers = sortedOffers.slice().sort((a, b) => b.price - a.price);
          break;
        case SortType.RATED:
          sortedOffers = sortedOffers.slice().sort((a, b) => b.rating - a.rating);
          break;
        default:
          return { ...state, offers: sortedOffers };
      }

      return { ...state, offers: sortedOffers };
    });
});

export {reducer};
