import { render, screen, within } from "@testing-library/react";
import { mockOffers, mockState, mockStore } from "../../utils/mocks";
import { Provider } from "react-redux";
import FavoriteList from "./favorite-list";
import { MemoryRouter } from 'react-router-dom';

describe('FavoriteList component', () => {
  const mockFavoriteOffers = [mockOffers[0]];
  const state = mockState();
  const store = mockStore(state);
  it('renders a list of favorite places grouped by city', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FavoriteList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockFavoriteOffers[0].city.name)).toBeInTheDocument();
    expect(screen.getByText(mockFavoriteOffers[0].title)).toBeInTheDocument();

    const favoriteList = screen.getByTestId('favorites-list');
    const cities = Array.from(new Set(mockFavoriteOffers.map((offer) => offer.city.name)));

    cities.forEach((city) => {
      const cityElement = within(favoriteList).getByText(city);
      expect(cityElement).toBeInTheDocument();
    });
  });

});