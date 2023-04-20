import { fetchReviewsAction, postCommentAction } from './../api-actions/coments-api-actions';
import { DataState } from '../../types/state';
import { mockOffers, mockReviews } from '../../utils/mocks';
import { fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, toggleFavoriteAction } from '../api-actions/offers-api-actions';
import { addReview, loadNearbyOffers, loadOffer, loadOffers, loadReviews, mainData, setOffersDataLoadingStatus } from './main-data.slice';

describe('Reducers: main-data', () => {
  let initialState: DataState;

  beforeEach(() =>{
    initialState = {
      offers: [],
      nearbyOffers: [],
      reviews: [],
      isOffersDataLoading: false,
      selectedOffer: null,
      favoriteOffers: [],
      isSubmitting: false,
      isSubmittingSuccess: false
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(mainData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({favoriteOffers: [],
        isOffersDataLoading: false,
        nearbyOffers: [],
        offers: [],
        reviews: [],
        selectedOffer: null,
        isSubmitting: false,
        isSubmittingSuccess: false
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

describe('Extra Reducers: main-data', () => {
  let initialState: DataState;

  beforeEach(() =>{
    initialState = {
      offers: [],
      nearbyOffers: [],
      reviews: [],
      isOffersDataLoading: false,
      selectedOffer: null,
      favoriteOffers: [],
      isSubmitting: false,
      isSubmittingSuccess: false
    };
  });
  it('should handle fetchOffersAction.fulfilled', () => {
    const payload = mockOffers;
    const action = { type: fetchOffersAction.fulfilled.type, payload };
    const newState = mainData.reducer(initialState, action);

    expect(newState.offers).toEqual(payload);
    expect(newState.isOffersDataLoading).toBe(false);
  });

  it('should handle fetchOffersAction.rejected', () => {
    const action = { type: fetchOffersAction.rejected.type };
    const newState = mainData.reducer(initialState, action);

    expect(newState.isOffersDataLoading).toBe(false);
  });

  it('should handle fetchOffersAction.pending', () => {
    const action = { type: fetchOffersAction.pending.type };
    const newState = mainData.reducer(initialState, action);

    expect(newState.isOffersDataLoading).toBe(true);
  });

  it('should handle fetchOfferAction.fulfilled', () => {
    const payload = mockOffers[0];
    const action = { type: fetchOfferAction.fulfilled.type, payload };
    const newState = mainData.reducer(initialState, action);

    expect(newState.selectedOffer).toEqual(payload);
  });

  it('should handle fetchNearbyOffersAction.fulfilled', () => {
    const payload = mockOffers;
    const action = { type: fetchNearbyOffersAction.fulfilled.type, payload };
    const newState = mainData.reducer(initialState, action);

    expect(newState.nearbyOffers).toEqual(payload);
  });

  it('should handle fetchReviewsAction.fulfilled', () => {
    const payload = mockReviews;
    const action = { type: fetchReviewsAction.fulfilled.type, payload };
    const newState = mainData.reducer(initialState, action);

    expect(newState.reviews).toEqual(payload);
  });

  it('should handle postCommentAction.fulfilled', () => {
    const payload = mockReviews[0];

    const action = { type: postCommentAction.fulfilled.type, payload };
    const newState = mainData.reducer(initialState, action);
    expect(newState.reviews).toEqual(action.payload);
  });

  it('should handle postCommentAction.pending', () => {
    const action = { type: postCommentAction.pending.type };
    const newState = mainData.reducer(initialState, action);

    expect(newState.isSubmitting).toBe(true);
  });

  it("should handle postCommentAction.rejected", () => {
    const error = { message: "An error occurred" };
    const action = {
      type: postCommentAction.rejected.type,
      error,
    };

    const newState = mainData.reducer(initialState, action);
  
    expect(newState.isSubmitting).toBe(false);
    expect(newState.isSubmittingSuccess).toBe(false);
    expect(error.message).toEqual(action.error.message);
  });

  it('should handle toggleFavoriteAction.fulfilled', () => {
    const initialOffers = mockOffers;
    const payload = mockOffers[0];
    const action = { type: toggleFavoriteAction.fulfilled.type, payload };
    const newState = mainData.reducer({ ...initialState, offers: initialOffers }, action);

    expect(newState.offers[0]).toEqual(payload);
    expect(newState.offers[0]).toEqual(initialOffers[0]);
  });

  it('should handle fetchFavoriteOffersAction.fulfilled', () => {
    const payload = mockOffers;
    const action = { type: fetchFavoriteOffersAction.fulfilled.type, payload };
    const newState = mainData.reducer(initialState, action);

    expect(newState.favoriteOffers).toEqual(payload);
  });
});
