import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';

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
