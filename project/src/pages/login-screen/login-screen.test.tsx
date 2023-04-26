import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LoginScreen from './login-screen';
import { store } from '../../store';


describe('LoginScreen', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders the sign in header', () => {
    expect(screen.getByTestId(/header/i)).toBeInTheDocument();
  });

  it('renders the email and password inputs', () => {
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('handles form submission when the sign in button is clicked', async () => {
    const emailInput = screen.getByTestId(/login/i);
    const passwordInput = screen.getByTestId(/password/i);
    const signInButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(signInButton);
  });

});
