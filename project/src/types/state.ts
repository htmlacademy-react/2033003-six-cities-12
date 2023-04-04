import {store} from '../store/index.js';
import { Offer } from './offer.js';

export type RootState = {
  locationName: string;
  sortingMethod: string;
  offers: Offer[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
