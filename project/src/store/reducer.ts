import { changeCity, setSorting, setOffers, resetState, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
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
  isOffersDataLoading: false,
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
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
