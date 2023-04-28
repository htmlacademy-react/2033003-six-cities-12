import { Action, Middleware } from '@reduxjs/toolkit';
import { fetchOfferAction } from '../api-actions/offers-api-actions/offers-api-actions';
import { AppRoute } from '../../const';
import browserHistory from '../../browser-history';

export const redirectOnOfferError: Middleware = () => (next) => (action: Action) => {
  if (fetchOfferAction.rejected.match(action)) {
    next(action);
    browserHistory.replace(AppRoute.NotFound);
  }

  return next(action);
};
