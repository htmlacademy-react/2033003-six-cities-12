import { Fragment} from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersProps = {
  offers: Offer[];
  setActiveOffer?: (id: number) => void;
  isNearby?: boolean;
}

function Offers({offers, setActiveOffer, isNearby = false}: OffersProps) : JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOffer && setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer && setActiveOffer(-1)}
          isNearby={isNearby}
        />
      ))}
    </Fragment>
  );
}

export default Offers;
