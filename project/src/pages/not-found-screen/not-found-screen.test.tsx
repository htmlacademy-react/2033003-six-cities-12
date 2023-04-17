import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import NotFoundScreen from './not-found-screen';
import { HelmetProvider } from 'react-helmet-async';

describe('NotFoundScreen', () => {
  it('renders the heading and text correctly', () => {
    const history = createMemoryHistory();
    render(<HistoryRouter history={history}><NotFoundScreen/></HistoryRouter>);
    const headingElement = screen.getByText('404');
    const textElement = screen.getByText('Страница не найдена');
    expect(headingElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it('renders the link correctly', () => {
    const history = createMemoryHistory();
    render(<HistoryRouter history={history}><HelmetProvider><NotFoundScreen/>
      </HelmetProvider></HistoryRouter>);
    const linkElement = screen.getByText('Вернуться на главную');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});