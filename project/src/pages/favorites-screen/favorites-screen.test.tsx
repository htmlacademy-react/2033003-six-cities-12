import { render, screen} from '@testing-library/react';
import { mockAPI, mockOffers, mockState, mockStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import FavoritesScreen from './favorites-screen';
import { fetchNearbyOffersAction } from '../../store/api-actions/offers-api-actions';
import { APIRoute } from '../../const';

const state = mockState();
const store = mockStore(state);
describe('FavoritesScreen', () => {

  it('returns favorite offers from the state', async () => {
    const hotelId = String(mockOffers[0].id);

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
