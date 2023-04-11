import { changeCity, setSorting, setOffers, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';
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
    .addCase(changeCity, (state, action) => {
      state.locationName = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sortingMethod = action.payload;
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
