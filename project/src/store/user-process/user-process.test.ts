import { AppRoute, AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions/auth-api-actions';
import { userProcess } from './user-process.slice';
import { UserState } from '../../types/state';

describe('Reducer: user-process', () => {
  let initialState: UserState;

  beforeEach(() =>{
    initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      email: '',
      avatarUrl: '',
      userId: null,
      isPro: false
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, avatarUrl: '', email: '', userId: null, isPro: false});
  });

  it('should update state after a successful checkAuthAction', () => {
    const payload = { email: 'test@test.com', avatarUrl: 'https://example.com/avatar.png', redirect: '', userId: null, isPro: true };
    const action = { type: checkAuthAction.fulfilled.type, payload };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      email: 'test@test.com',
      avatarUrl: 'https://example.com/avatar.png',
      userId: undefined,
      isPro: false
    };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });

  it('should update state after an unsuccessful checkAuthAction', () => {
    const action = { type: checkAuthAction.rejected.type };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      email: '',
      avatarUrl: '',
      isPro: false,
      userId: null
    };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });

  it('should update state after a successful loginAction', () => {
    const action = { type: loginAction.fulfilled.type, payload: { isPro: true } };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, email: '', avatarUrl: '', isPro: true, userId: null };
    const nextState = userProcess.reducer(undefined, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should change the authorization status to Auth and redirect to the main page when loginAction.fulfilled is dispatched', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      email: '',
      avatarUrl: '',
      isPro: false,
      userId: null
    };
  
    const action = { type: loginAction.fulfilled.type, payload: { isPro: false } };
    const state = userProcess.reducer(initialState, action);
  
    expect(state).toEqual(expectedState);
  });

  it('should update state after a successful logoutAction', () => {
    const action = { type: logoutAction.fulfilled.type };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, email: '', avatarUrl: '', isPro: false, userId: null };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });
});
