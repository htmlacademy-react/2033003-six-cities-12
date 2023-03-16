import { Fragment, useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersProps = {
  offers: Offer[];
}

function Offers({offers}: OffersProps) : JSX.Element {
  const [_activeOffer, setActiveOffer] = useState<number>(-1);

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer(-1)}
        />
      ))}
    </Fragment>
  );
}

export default Offers;
