import { Offer } from './types/offer';
import { Rating } from './types/rating';

export const SortType = {
  POPULAR: 'Popular',
  CHEAP: 'Price: low to high',
  EXPENSIVE: 'Price: high to low',
  RATED: 'Top rated first',
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AccommodationType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel'
}

export const ratings: Rating[] = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const URL_MARKER_DEFAULT =
  './img/pin.svg';
export const URL_MARKER_CURRENT =
  './img/pin-active.svg';

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export const TIMEOUT_SHOW_ERROR = 3000;

export const sortOffers = (offers: Offer[], sortingMethod: string): Offer[] => {
  switch (sortingMethod) {
    case SortType.CHEAP:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.EXPENSIVE:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
