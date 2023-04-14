import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getLocationName } from '../../store/main-process/main-process.selectors';
import SortingOptions from '../sorting-options/sorting-options';
import Offers from './offers';
import { Offer } from '../../types/offer';
import { getFilteredAndSortedOffers } from '../../store/main-data/main-data.selectors';

type OffersListProps = {
  onSetActiveOffer?: (id: number) => void;
}

function OffersList({onSetActiveOffer}: OffersListProps) : JSX.Element {
  const selectedCityName = useAppSelector(getLocationName);
  const filteredAndSortedOffers: Offer[] = useAppSelector(getFilteredAndSortedOffers);
  const MemoizedSortingOptions = memo(SortingOptions);
  const MemoizedOffers = memo(Offers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredAndSortedOffers.length} places to stay in {selectedCityName}</b>
      <MemoizedSortingOptions/>
      <MemoizedOffers setActiveOffer={onSetActiveOffer}/>
    </section>
  );
}

export default OffersList;
