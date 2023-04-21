import { Offer } from '../../types/offer';
import OfferCard from './offer-card';
import { useAppSelector } from '../../hooks';
import { getNearbyOffers } from '../../store/main-data/main-data.selectors';
import { memo } from 'react';

type OffersProps = {
  setActiveOffer?: (id: number) => void;
  isNearby?: boolean;
  filteredAndSortedOffers: Offer[];
}

function Offers({setActiveOffer, filteredAndSortedOffers, isNearby = false}: OffersProps) : JSX.Element {
  const nearbyOffers = useAppSelector(getNearbyOffers);
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
