import { memo } from 'react';
import { AccommodationType } from '../../const';

type FeaturesProps = {
  type: AccommodationType;
  bedrooms: number;
  maxAdults: number;
}

function Features({type, bedrooms, maxAdults}: FeaturesProps) : JSX.Element {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default memo(Features);
