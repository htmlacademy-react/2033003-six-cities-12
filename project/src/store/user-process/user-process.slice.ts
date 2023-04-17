import { redirectToRoute } from '../action';
import { createSlice } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../../const';
import { UserState } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions/auth-api-actions';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  avatarUrl: ''
};

export const userProcess = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload.email;
        state.avatarUrl = action.payload.avatarUrl;
      })
      .addCase(checkAuthAction.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        redirectToRoute(AppRoute.Main);
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
