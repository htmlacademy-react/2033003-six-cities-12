import { fireEvent, render, screen } from "@testing-library/react";
import { mockOffers, mockState, mockStore } from "../../utils/mocks";
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import Comment from "./comment";

describe('Comment', () => {
  it('calls onChange with the correct value when the textarea value changes', () => {
    const onChange = jest.fn();
    const comment = '';
    const { getByPlaceholderText } = render(<Comment comment={comment} onChange={onChange} />);
    const textarea = getByPlaceholderText('Tell how was your stay, what you like and what can be improved');
    fireEvent.change(textarea, { target: { value: 'test comment' } });
    expect(onChange).toHaveBeenCalledWith('test comment');
  });
});