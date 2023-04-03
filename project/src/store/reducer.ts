import { changeCity, setOffers } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';
import { offers } from '../mocks/offers';

const initialState: RootState = {
  locationName: 'Paris',
  offers: offers
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.locationName = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
});

export {reducer};
