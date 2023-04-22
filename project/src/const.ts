import { Offer } from './types/offer';
import { Rating } from './types/rating';
import { Review } from './types/review';
import { UserData } from './types/user-data';

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

export const compareByDate = (a: Review, b: Review) => {
  const dateA = a.date ? new Date(a.date).getTime() : 0;
  const dateB = b.date ? new Date(b.date).getTime() : 0;
  return dateB - dateA;
};

export const generateNewReview = (comment: string, rating: number, user: UserData, id: string | undefined, date: string | undefined): Review => {
  const newReview: Review = {
    comment: comment,
    date: date,
    id: Number(id),
    rating: Number(rating),
    user: {
      avatarUrl: user.avatarUrl,
      id: user.id,
      isPro: user.isPro,
      name: user.name,
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

export const commentId = Math.floor(Math.random() * 1000000);
export const userId = Math.floor(Math.random() * 1000000);
export const commentDate = new Date().toISOString();

export const MAX_LENGTH_COMMENT = 300;
export const MIN_LENGTH_COMMENT = 50;
