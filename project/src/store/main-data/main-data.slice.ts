import { Offer } from './../../types/offer';
import { Review } from '../../types/review';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataState } from '../../types/state';
import { fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, toggleFavoriteAction } from '../api-actions/offers-api-actions/offers-api-actions';
import { fetchReviewsAction, postReviewAction } from '../api-actions/coments-api-actions/coments-api-actions';
import { toast } from 'react-toastify';

export const initialState: DataState = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  isDataLoading: false,
  selectedOffer: null,
  favoriteOffers: [],
  isSubmitting: false,
  isSubmittingSuccess: false,
};

export const mainData = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    },
    loadOffer: (state, action: PayloadAction<Offer>) => {
      state.selectedOffer = action.payload;
    },
    loadNearbyOffers: (state, action: PayloadAction<Offer[]>) => {
      state.nearbyOffers = action.payload;
    },
    loadReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
    addReview: (state, action: PayloadAction<Review>) => {
      state.reviews.push(action.payload);
    },
    resetSubmittingSuccessStatus: (state, action: PayloadAction<boolean>) => {
      state.isSubmittingSuccess = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state, action) => {
        state.selectedOffer = null;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state, action) => {
        state.isSubmitting = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isSubmitting = false;
        state.isSubmittingSuccess = true;
      })
      .addCase(postReviewAction.rejected, (state, action) => {
        state.isSubmitting = false;
        state.isSubmittingSuccess = false;
        toast.warn(action.error.message);
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
        if (index !== -1) {
          state.offers[index] = action.payload;
        }
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});

export const {
  loadOffers,
  setOffersDataLoadingStatus,
  loadOffer,
  loadNearbyOffers,
  loadReviews,
  addReview,
  resetSubmittingSuccessStatus
} = mainData.actions;
