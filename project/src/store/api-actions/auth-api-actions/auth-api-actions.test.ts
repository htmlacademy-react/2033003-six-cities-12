import { APIRoute } from '../../../const';
import { checkAuthAction, loginAction, logoutAction } from '../auth-api-actions/auth-api-actions';
import { AuthData } from '../../../types/auth-data';
import { AUTH_TOKEN_KEY_NAME } from '../../../services/token';
import { mockAPI, mockStore } from '../../../utils/mocks';


describe('API Actions: user actions', () => {
  afterEach(() => {
    mockAPI.reset();
  });
  describe('checkAuthAction', () => {
    it('should dispatch fulfilled with user data on success', async () => {
      const store = mockStore();
      mockAPI
        .onGet(APIRoute.Login)
        .reply(200, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkAuthAction());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });
  });
  describe('loginAction', () => {
    it('should dispatch fulfilled on success and call checkAuthAction', async () => {
      const store = mockStore();
      const authData: AuthData = { login: 'test@test.com', password: '123password' };
      mockAPI.onPost(APIRoute.Login).reply(200, { data:{ token: AUTH_TOKEN_KEY_NAME } });

      Storage.prototype.setItem = jest.fn();
      await store.dispatch(loginAction(authData));
      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loginAction.pending.type,
        checkAuthAction.pending.type,
        loginAction.fulfilled.type
      ]);
    });
  });
  describe('logoutAction', () => {
    it('should dispatch fulfilled on success and remove token', async () => {
      const store = mockStore();
      mockAPI.onDelete(APIRoute.Logout).reply(200);

      Storage.prototype.removeItem = jest.fn();
      await store.dispatch(logoutAction());
      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
      expect(Storage.prototype.removeItem).toBeCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledWith(AUTH_TOKEN_KEY_NAME);
    });
  });
});
