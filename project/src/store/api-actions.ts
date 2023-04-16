import { redirectToRoute } from './action';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offer } from '../types/offer.js';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, generateNewReview} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Review } from '../types/review.js';
import { ReviewData } from '../types/review-data.js';
import { FavoriteData } from '../types/favorite-data';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const response = await api.get<UserData>(APIRoute.Login);
    return response.data;
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchOfferAction = createAsyncThunk<Offer | null, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (hotelId: string, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<Offer | null>(`${APIRoute.Hotels}/${hotelId}`);
      return data;
    }catch{
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (hotelId: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (hotelId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${hotelId}`);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<Review, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({hotelId,comment, rating, avatarUrl, name}, { dispatch, extra: api }) => {
    await api.post<ReviewData>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    const newReview: Review = generateNewReview(comment, rating, avatarUrl, name);
    return newReview;
  },
);

export const toggleFavoriteAction = createAsyncThunk<Offer, FavoriteData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/toggleFavorite', async ({offerId, status}, { dispatch, extra: api }) => {
  const response = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);
  return response.data;
});
