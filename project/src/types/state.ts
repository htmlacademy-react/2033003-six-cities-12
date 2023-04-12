import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';

export type RootState = {
  locationName: string;
  sortingMethod: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  selectedOffer: Offer | null;
  nearbyOffers: Offer[];
  reviews: Review[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
