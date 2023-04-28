import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserState } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions/auth-api-actions/auth-api-actions';

export const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  avatarUrl: '',
  userId: null,
  isPro: false,
  isSubmitting: false,
};

export const userProcess = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload.email;
        state.avatarUrl = action.payload.avatarUrl;
        state.userId = action.payload.id;
      })
      .addCase(checkAuthAction.rejected, (state, _action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state, _action) => {
        state.isSubmitting = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isPro = action.payload.isPro;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isSubmitting = false;
      })
      .addCase(loginAction.rejected, (state, _action) => {
        state.isSubmitting = false;
      })
      .addCase(logoutAction.fulfilled, (state, _action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const {
  setIsSubmitting
} = userProcess.actions;
