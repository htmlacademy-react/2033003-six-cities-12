import { mockOffers, mockReviews } from '../../utils/mocks';
import { addReview, initialState, loadNearbyOffers, loadOffer, loadOffers, loadReviews, mainData, setOffersDataLoadingStatus } from './main-data.slice';

describe('Reducer: main-data', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({favoriteOffers: [],
        isOffersDataLoading: false,
        nearbyOffers: [],
        offers: [],
        reviews: [],
        selectedOffer: null
      });
  });

  it('should load offers', () => {
    const newState = mainData.reducer(initialState, loadOffers(mockOffers));
    expect(newState.offers).toEqual(mockOffers);
  });

  it('should set offers data loading status', () => {
    const newState = mainData.reducer(initialState, setOffersDataLoadingStatus(true));
    expect(newState.isOffersDataLoading).toBe(true);
  });

  it('should load selected offer', () => {
    const newState = mainData.reducer(initialState, loadOffer(mockOffers[0]));
    expect(newState.selectedOffer).toEqual(mockOffers[0]);
  });

  it('should load nearby offers', () => {
    const newState = mainData.reducer(initialState, loadNearbyOffers(mockOffers));
    expect(newState.nearbyOffers).toEqual(mockOffers);
  });

  it('should load reviews', () => {
    const newState = mainData.reducer(initialState, loadReviews(mockReviews));
    expect(newState.reviews).toEqual(mockReviews);
  });

  it('should add review', () => {
    const newState = mainData.reducer(initialState, addReview(mockReviews[0]));
    expect(newState.reviews).toContain(mockReviews[0]);
  });
});
