import { render, screen} from '@testing-library/react';
import { store } from '../../store';
import { mockAPI, mockOffers, mockState, mockStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import FavoritesScreen from './favorites-screen';
import { fetchNearbyOffersAction } from '../../store/api-actions/offers-api-actions';
import { APIRoute } from '../../const';

describe('FavoritesScreen', () => {
  it('should render correctly when there are no favorite offers', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FavoritesScreen />
        </MemoryRouter>
      </Provider>
    );

    const statusElement = screen.getByText(/Nothing yet saved./i);
    expect(statusElement).toBeInTheDocument();
  });

  it('returns favorite offers from the state', async () => {
    const hotelId = String(mockOffers[0].id);
    const state = mockState();
    const store = mockStore(state);

    mockAPI
      .onGet(`${APIRoute.Hotels}/${hotelId}/nearby`)
      .reply(200, mockOffers);

    await store.dispatch(fetchNearbyOffersAction(hotelId));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FavoritesScreen />
        </MemoryRouter>
      </Provider>
    );

    const titleElement = screen.getByText(/Saved listing/i);
    expect(titleElement).toBeInTheDocument();
  });
});