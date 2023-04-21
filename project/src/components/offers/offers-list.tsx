import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getLocationName } from '../../store/main-process/main-process.selectors';
import SortingOptions from '../sorting-options/sorting-options';
import Offers from './offers';
import { Offer } from '../../types/offer';

type OffersListProps = {
  onSetActiveOffer?: (id: number) => void;
  filteredAndSortedOffers: Offer[];
}

function OffersList({onSetActiveOffer, filteredAndSortedOffers}: OffersListProps) : JSX.Element {
  const selectedCityName = useAppSelector(getLocationName);
  const MemoizedOffers = memo(Offers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredAndSortedOffers.length} places to stay in {selectedCityName}</b>
      <SortingOptions/>
      <MemoizedOffers setActiveOffer={onSetActiveOffer} filteredAndSortedOffers={filteredAndSortedOffers}/>
    </section>
  );
}

export default OffersList;
