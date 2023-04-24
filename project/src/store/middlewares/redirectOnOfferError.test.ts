import { AnyAction, Dispatch} from '@reduxjs/toolkit';
import { redirectOnOfferError } from './redirectOnOfferError';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { fetchOfferAction } from '../api-actions/offers-api-actions';
import { mockStore } from '../../utils/mocks';

describe('redirectOnOfferError middleware', () => {
  let store = mockStore();
  let next: Dispatch<AnyAction>;

  beforeEach(() => {
    store = mockStore();
    next = jest.fn();
  });

  it('should redirect to NotFound page on fetchOfferAction.rejected', () => {
    const middlewareAPI = { getState: () => store.getState(), dispatch: store.dispatch };
    const middleware = redirectOnOfferError(middlewareAPI)(next);

    const rejectedAction = fetchOfferAction.rejected(Error('Unable to fetch offer'), '', '');

    middleware(rejectedAction);

    expect(browserHistory.location.pathname).toBe(`/${AppRoute.NotFound}`);
    expect(next).toHaveBeenCalledWith(rejectedAction);
  });

});
