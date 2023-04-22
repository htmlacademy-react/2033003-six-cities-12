import { render, screen } from '@testing-library/react';
import App from './app';
import { mockOffers, mockState } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import useFilteredAndSortedOffers from '../../hooks/use-filtered-and-sorted-offers/use-filtered-and-sorted-offers';
import { isDataLoading } from '../../store/main-data/main-data.selectors';
import { useFetchFavoriteOffers } from '../../hooks/use-fetch-favorite-offers/use-fetch-favorite-offers';

jest.mock('../../hooks/use-filtered-and-sorted-offers/use-filtered-and-sorted-offers', () => jest.fn());
jest.mock('../../hooks/use-fetch-favorite-offers/use-fetch-favorite-offers', () => ({
  useFetchFavoriteOffers: jest.fn(() => mockOffers),
}));
const state = mockState();
state.user.authorizationStatus = AuthorizationStatus.Auth;
const mocksStore = configureMockStore();
const store = mocksStore(state);
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('App', () => {
  
  it('renders main screen', () => {
    (useFilteredAndSortedOffers as jest.Mock).mockImplementationOnce(() => mockOffers); 
    history.push(AppRoute.Main);
    render(fakeApp);

    const mainScreenElement = screen.getByText(/Cities/i);
    expect(mainScreenElement).toBeInTheDocument();
  });
});

it('renders login screen', () => {
  (useFilteredAndSortedOffers as jest.Mock).mockImplementationOnce(() => mockOffers);
  history.push(AppRoute.Login);
  render(fakeApp);
  const loginScreenElement = screen.getByText(/Sign in/i);
  expect(loginScreenElement).toBeInTheDocument();
});
