import { AppRoute, AuthorizationStatus } from '../../const';
import { UserState } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions/auth-api-actions';
import { userProcess } from './user-process.slice';

jest.mock('../action');

describe('Reducer: user-process', () => {
  let initialState: UserState;

  beforeEach(() => {
    initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      email: '',
      avatarUrl: '',
      redirect: ''
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, avatarUrl: '', email: '', redirect: ''});
  });

  it('should update state after a successful checkAuthAction', () => {
    const payload = { email: 'test@test.com', avatarUrl: 'https://example.com/avatar.png', redirect: ''};
    const action = { type: checkAuthAction.fulfilled.type, payload };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      email: 'test@test.com',
      avatarUrl: 'https://example.com/avatar.png',
      redirect: ''
    };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });

  it('should update state after an unsuccessful checkAuthAction', () => {
    const action = { type: checkAuthAction.rejected.type };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      email: '',
      avatarUrl: '',
      redirect: ''
    };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });

  it('should update state after a successful loginAction', () => {
    const action = { type: loginAction.fulfilled.type };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, email: '', avatarUrl: '', redirect: AppRoute.Main };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });

  it('should change the authorization status to Auth and redirect to the main page when loginAction.fulfilled is dispatched', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      email: '',
      avatarUrl: '',
      redirect: AppRoute.Main,
    };

    const action = { type: loginAction.fulfilled.type };
    const state = userProcess.reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should update state after a successful logoutAction', () => {
    const action = { type: logoutAction.fulfilled.type };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, email: '', avatarUrl: '',redirect: '' };
    expect(userProcess.reducer(undefined, action)).toEqual(expectedState);
  });
});
