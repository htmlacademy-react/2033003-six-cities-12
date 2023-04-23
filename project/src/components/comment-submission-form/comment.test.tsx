import { fireEvent, render, screen } from '@testing-library/react';
import Comment from './comment';

describe('Comment', () => {
  describe('Comment', () => {
    it('calls onChange with the correct value when the textarea value changes', () => {
      const onChange = jest.fn();
      const comment = '';
      render(<Comment comment={comment} onChange={onChange} />);
      const textarea = screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i);
      fireEvent.change(textarea, { target: { value: 'test comment' } });
      expect(onChange).toHaveBeenCalledWith('test comment');
    });
  });
});
