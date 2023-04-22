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

jest.mock('../../hooks/use-filtered-and-sorted-offers/use-filtered-and-sorted-offers', () => jest.fn());

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

// test('renders login screen', () => {
//   const history = createMemoryHistory();
//   history.push('/login');
//   render(
//     <HistoryRouter history={history}>
//       <App />
//     </HistoryRouter>
//   );
//   const loginScreenElement = screen.getByText('Login screen');
//   expect(loginScreenElement).toBeInTheDocument();
// });

// test('renders favorites screen when logged in', () => {
//   const history = createMemoryHistory();
//   history.push('/favorites');
//   render(
//     <HistoryRouter history={history}>
//       <App />
//     </HistoryRouter>
//   );
//   const favoritesScreenElement = screen.getByText('Favorites screen');
//   expect(favoritesScreenElement).toBeInTheDocument();
// });

// test('redirects to login screen when not logged in', () => {
//   const history = createMemoryHistory();
//   history.push('/favorites');
//   render(
//     <HistoryRouter history={history}>
//       <App />
//     </HistoryRouter>
//   );
//   const loginScreenElement = screen.getByText('Login screen');
//   expect(loginScreenElement).toBeInTheDocument();
// });

// test('renders room screen', () => {
//   const history = createMemoryHistory();
//   history.push('/room');
//   render(
//     <HistoryRouter history={history}>
//       <App />
//     </HistoryRouter>
//   );
//   const roomScreenElement = screen.getByText('Room screen');
//   expect(roomScreenElement).toBeInTheDocument();
// });

// test('renders not found screen', () => {
//   const history = createMemoryHistory();
//   history.push('/invalid-url');
//   render(
//     <HistoryRouter history={history}>
//       <App />
//     </HistoryRouter>
//   );
//   const notFoundScreenElement = screen.getByText('Not found screen');
//   expect(notFoundScreenElement).toBeInTheDocument();
// });