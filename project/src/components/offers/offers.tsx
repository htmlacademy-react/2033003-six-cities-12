import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
import { getFilteredAndSortedOffers, getNearbyOffers } from '../../store/main-data/main-data.selectors';

type OffersProps = {
  setActiveOffer?: (id: number) => void;
  isNearby?: boolean;
}

function Offers({setActiveOffer, isNearby = false}: OffersProps) : JSX.Element {
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const filteredAndSortedOffers = useAppSelector(getFilteredAndSortedOffers);
  const offers: Offer[] = isNearby ? nearbyOffers : filteredAndSortedOffers;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOffer && setActiveOffer(offer.id)}
          onMouseLeave={() => setActiveOffer && setActiveOffer(-1)}
          isNearby={isNearby}
        />
      ))}
    </div>
  );
}

export default Offers;
