import { changeCity } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';

const initialState: RootState = {
  locationName: 'Paris'
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.locationName = action.payload;
    });
});

export {reducer};
