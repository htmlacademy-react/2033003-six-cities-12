import {store} from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';

export type MainState = {
  locationName: string;
  sortingMethod: string;
}

export type DataState = {
  offers: Offer[];
  nearbyOffers: Offer[];
  reviews: Review[];
  isDataLoading: boolean;
  selectedOffer: Offer | null;
  favoriteOffers: Offer[];
  isSubmitting: boolean;
  isSubmittingSuccess: boolean;
}

export type UserState = {
  authorizationStatus: string;
  email: string | undefined;
  avatarUrl: string;
  userId: number | null;
  isPro: boolean;
  isSubmitting: boolean;
}

export type AppState = {
  main: MainState;
  data: DataState;
  user: UserState;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
