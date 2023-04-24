import { AccommodationType, AuthorizationStatus, SortType } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { ReviewData } from '../types/review-data';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import { createApi } from '../services/api';
import { State} from '../types/state';
import { UserData } from '../types/user-data';
import { AUTH_TOKEN_KEY_NAME } from '../services/token';
import { CombinedState } from '@reduxjs/toolkit';

export const mockOffers: Offer[] = [{
  city: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  previewImage: 'https://12.react.pages.academy/static/hotel/16.jpg',
  images: [
    'https://12.react.pages.academy/static/hotel/9.jpg',
    'https://12.react.pages.academy/static/hotel/10.jpg',
    'https://12.react.pages.academy/static/hotel/1.jpg',
    'https://12.react.pages.academy/static/hotel/7.jpg',
    'https://12.react.pages.academy/static/hotel/11.jpg',
    'https://12.react.pages.academy/static/hotel/6.jpg',
    'https://12.react.pages.academy/static/hotel/16.jpg'
  ],
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  isFavorite: true,
  isPremium: true,
  rating: 3.8,
  type: AccommodationType.Hotel,
  bedrooms: 2,
  maxAdults: 6,
  price: 334,
  goods: [
    'Washer',
    'Air conditioning',
    'Laptop friendly workspace',
    'Baby seat',
    'Towels',
    'Breakfast',
    'Fridge'
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg'
  },
  description: 'This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
  location: {
    latitude: 53.528341000000005,
    longitude: 10.018654000000002,
    zoom: 16
  },
  id: 16
},{
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  previewImage: 'https://12.react.pages.academy/static/hotel/7.jpg',
  images: [
    'https://12.react.pages.academy/static/hotel/1.jpg',
    'https://12.react.pages.academy/static/hotel/16.jpg',
    'https://12.react.pages.academy/static/hotel/5.jpg',
    'https://12.react.pages.academy/static/hotel/12.jpg',
    'https://12.react.pages.academy/static/hotel/8.jpg',
  ],
  title: 'The Pondhouse - A Magical Place',
  isFavorite: false,
  isPremium: false,
  rating: 4.7,
  type: AccommodationType.Room,
  bedrooms: 1,
  maxAdults: 2,
  price: 260,
  goods: [
    'Washer',
    'Laptop friendly workspace',
    'Breakfast'
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg'
  },
  description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
  location: {
    latitude: 50.930361,
    longitude: 6.937974,
    zoom: 16
  },
  id: 33
}];

export const mockReviews: Review[] = [
  {
    id: 1,
    user: {
      id: 11,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 3,
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2023-03-09T07:31:24.950Z'
  },
  {
    id: 2,
    user: {
      id: 11,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 3,
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2023-03-09T07:31:24.950Z'
  },
  {
    id: 3,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/7.jpg'
    },
    rating: 3,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2023-03-09T07:31:24.950Z'
  }
];

export const mockUser: UserData = {
  id: 111,
  email: 'test@test.ru',
  token: AUTH_TOKEN_KEY_NAME,
  avatarUrl: 'https://12.react.pages.academy/static/avatar/2.jpg',
  isPro: true,
  name: 'Bob'
};

export const mockReviewData: ReviewData = {
  hotelId: String(mockOffers[0].id),
  comment: mockReviews[0].comment,
  rating: mockReviews[0].rating,
  user: mockUser,
  id: String(mockReviews[0].id),
  date: mockReviews[0].date,
};

const api = createApi();
export const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];
export const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

export const mockState = (): CombinedState<State> => ({
  data: {
    offers: [],
    nearbyOffers: [],
    reviews: mockReviews,
    isDataLoading: false,
    selectedOffer: null,
    favoriteOffers: mockOffers,
    isSubmitting: false,
    isSubmittingSuccess: false
  },
  main: {
    locationName: 'Paris',
    sortingMethod: SortType.POPULAR
  },
  user: {
    authorizationStatus: AuthorizationStatus.Unknown,
    email: '',
    avatarUrl: '',
    isPro: false,
    userId: null,
    isSubmitting: false
  },
});
