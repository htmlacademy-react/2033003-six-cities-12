import { Fragment} from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersProps = {
  offers: Offer[];
  setActiveOffer: (id: number) => void;
}

function Offers({offers, setActiveOffer}: OffersProps) : JSX.Element {

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
