import { Rating } from './types/rating';

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
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

