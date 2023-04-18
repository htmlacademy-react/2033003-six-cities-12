import { generateNewReview } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Review } from '../../types/review';
import { ReviewData } from '../../types/review-data';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';

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
