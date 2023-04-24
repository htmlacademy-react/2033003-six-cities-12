import { render, screen } from '@testing-library/react';
import { mockOffers, mockState, mockStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import FavoriteItem from './favorite-item';

describe('FavoriteItem component', () => {
  const state = mockState();
  const store = mockStore(state);
  it('renders the component correctly', () => {
    render(<Provider store={store}><MemoryRouter><FavoriteItem offer={mockOffers[0]}/></MemoryRouter></Provider>);

    expect(screen.getByAltText(mockOffers[0].title)).toBeInTheDocument();
    expect(screen.getByText(`€${mockOffers[0].price}`)).toBeInTheDocument();
    expect(screen.getByText(mockOffers[0].title)).toBeInTheDocument();
  });
});
