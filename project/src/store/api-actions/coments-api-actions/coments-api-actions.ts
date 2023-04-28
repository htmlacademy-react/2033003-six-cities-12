import { ReviewData } from '../../../types/review-data';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '../../../types/review';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../../const';

export const postReviewAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({hotelId,comment, rating }, { dispatch, extra: api }) => {
    const response = await api.post<Review[]>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    return response.data;
  }
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
