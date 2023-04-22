import { act, fireEvent, render, screen } from '@testing-library/react';
import { mockState, mockStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import CommentSubmissionForm from './comment-submission-form';
import { MemoryRouter } from 'react-router-dom';
import { ratings } from '../../const';

describe('CommentSubmissionForm', () => {
  const state = mockState();
  const store = mockStore(state);
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  test('should disable submit button when rating is not selected', () => {
    render(<Provider store={store}>
      <MemoryRouter>
      <CommentSubmissionForm />
      </MemoryRouter>
    </Provider>);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  
  const ratingStars = screen.getAllByTestId('star');

  fireEvent.click(ratingStars[0], { target: { value: ratings[0].value } });
  });

  it('disables the submit button when comment length is less than 50', () => {
    const comment = 'Test comment';
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <CommentSubmissionForm />
      </Provider>
    );
    const commentInput = getByLabelText('Your review');
    const submitButton = getByText('Submit');

    fireEvent.change(commentInput, { target: { value: comment } });

    expect(submitButton).toBeDisabled();
  });

  it('disables the submit button when the form is submitting', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CommentSubmissionForm />
      </Provider>
    );
    const submitButton = getByText('Submit');
    expect(submitButton).toBeDisabled();
  });

});