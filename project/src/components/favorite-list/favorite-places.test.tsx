import { render, screen } from '@testing-library/react';
import { mockOffers, mockState, mockStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import FavoritePlaces from './favorite-places';

describe('FavoriteList component', () => {
  const mockFavoriteOffers = [mockOffers[0]];
  const state = mockState();
  const store = mockStore(state);
  it('renders a list of favorite places for a given city', () => {
    const city = mockOffers[0].city.name;
    render(<Provider store={store}><MemoryRouter><FavoritePlaces city={city}/></MemoryRouter></Provider>);

    mockFavoriteOffers
      .filter(({ city: { name } }) => name === city)
      .forEach((offer) => {
        expect(screen.getByText(offer.title)).toBeInTheDocument();
        expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
        expect(screen.getByAltText(offer.title)).toBeInTheDocument();
      });
  });
});
