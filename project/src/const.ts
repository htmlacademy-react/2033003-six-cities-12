import { Offer } from './types/offer';
import { Rating } from './types/rating';
import { Review } from './types/review';

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
  Comments = '/comments',
  Favorite = '/favorite'
}

export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

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

export const compareByDate = (a: Review, b: Review) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const generateNewReview = (comment: string, rating: string, avatarUrl: string, name: string): Review => {
  const newReview: Review = {
    comment: comment,
    date: new Date().toISOString(),
    id: Math.floor(Math.random() * 1000000),
    rating: Number(rating),
    user: {
      avatarUrl: avatarUrl,
      id: Math.floor(Math.random() * 1000000),
      isPro: false,
      name: name,
    },
  };
  return newReview;
};

export enum NameSpace {
  Data = 'data',
  Main = 'main',
  User = 'user',
}

export const MAX_IMAGES = 6;

export const isValidPassword = (password: string): boolean => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
  return regex.test(password);
};

export const LOCATIONS = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];
