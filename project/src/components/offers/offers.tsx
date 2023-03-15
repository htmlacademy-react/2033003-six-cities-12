import { MouseEvent, useState } from 'react';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import OfferCard from '../offer-card/offer-card';

type OffersProps = {
  offers: Offer[];
}

function Offers({offers}: OffersProps) : JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number>(-1);

  const offerCards = offers.map((offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      onMouseEnter={() => setActiveOffer(offer.id)}
      onMouseLeave={() => setActiveOffer(-1)}
    />
  ));
  return (
    <div>
      {offerCards}
    </div>
  );
}

export default Offers;
