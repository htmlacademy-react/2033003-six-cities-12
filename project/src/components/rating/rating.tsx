type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps) : JSX.Element {
  const maxRating = 5;
  const roundedRating = Math.round(rating);
  //:TODO если я округляю рейтинг до целого числа тогда для чего width
  //на странице офера данные разнятся звезд 5 а рейтинг отображается 4.5
  //в примере структуры данных есть такая строка "rating": 4.8,
  const ratingPercentage = (roundedRating / maxRating) * 100;
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${ratingPercentage}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default Rating;
