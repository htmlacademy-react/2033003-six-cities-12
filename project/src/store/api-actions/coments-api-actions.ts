import { ReviewData } from './../../types/review-data';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '../../types/review';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';

export const postCommentAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({hotelId,comment, rating, user}, { dispatch, extra: api }) => {
    const response = await api.post<Review[]>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    return response.data;
  }
);
