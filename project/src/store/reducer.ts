import { changeCity, filterAndSortOffers, setOffers, setSorting } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';
import { offers } from '../mocks/offers';

const initialState: RootState = {
  locationName: 'Paris',
  sortingMethod: 'Popular',
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
    .addCase(setSorting, (state, action) => {
      switch (action.payload) {
        case 'Popular':
          state.sortingMethod = 'Popular';
          break;
        case 'Price: low to high':
          state.sortingMethod = 'Price: low to high';
          break;
        case 'Price: high to low':
          state.sortingMethod = 'Price: high to low';
          break;
        case 'Top rated first':
          state.sortingMethod = 'Top rated first';
          break;
        default:
          break;
      }
    })
    .addCase(filterAndSortOffers, (state) => {
      const {offers, locationName, sortingMethod } = state;
      const filteredOffers = offers.filter((offer) => offer.city.name === locationName);
      switch (sortingMethod) {
        case 'Price: low to high':
          filteredOffers.sort((a, b) => a.price - b.price);
          break;
        case 'Price: high to low':
          filteredOffers.sort((a, b) => b.price - a.price);
          break;
        case 'Top rated first':
          filteredOffers.sort((a, b) => b.rating - a.rating);
          break;
      }
      return { ...state, offers: filteredOffers };
    });
});

export {reducer};
