import { ChangeEvent, useCallback } from 'react';

type CommentProps = {
  comment: string;
  onChange: (value: string) => void;
};

function Comment({ comment, onChange }: CommentProps):JSX.Element {
  const handleCommentChange = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(evt.target.value);
    },
    [onChange],
  );

  return (
    <textarea
      minLength={50}
      maxLength={300}
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleCommentChange}
      value={comment}
    />
  );
}
export default Comment;
