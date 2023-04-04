import { changeCity, setSorting, setOffers, filterAndSortOffers, resetState } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../types/state';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';

const initialState: RootState = {
  locationName: 'Paris',
  sortingMethod: 'Popular',
  offers: offers
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetState, (state) => ({
      ...state,
      sortingMethod: 'Popular',
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
      const {locationName, sortingMethod } = state;

      let sortedOffers: Offer[] = offers.slice().filter((offer) => offer.city.name === locationName);

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
    });
});

export {reducer};
