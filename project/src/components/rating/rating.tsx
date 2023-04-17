type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps) : JSX.Element {
  const maxRating = 5;
  const roundedRating = Math.floor(rating);
  const ratingPercentage = (roundedRating / maxRating) * 100;
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${ratingPercentage}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default Rating;
