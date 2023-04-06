import { changeCity, setSorting, setOffers, filterAndSortOffers, resetState, loadOffers, requireAuthorization, setError } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';
import { Offer } from '../types/offer';
import { AuthorizationStatus, SortType } from '../const';

const initialState: RootState = {
  locationName: 'Paris',
  sortingMethod: SortType.POPULAR,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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

      let sortedOffers: Offer[] = state.offers.slice().filter((offer) => offer.city.name === locationName);

      switch (sortingMethod) {
        case 'Price: low to high':
          sortedOffers = sortedOffers.slice().sort((a, b) => a.price - b.price);
          break;
        case 'Price: high to low':
          sortedOffers = sortedOffers.slice().sort((a, b) => b.price - a.price);
          break;
        case 'Top rated first':
          sortedOffers = sortedOffers.slice().sort((a, b) => b.rating - a.rating);
          break;
        default:
          // 'Popular'
          break;
      }

      return { ...state, offers: sortedOffers };
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});

export {reducer};
