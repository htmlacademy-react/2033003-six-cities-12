import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '..';
import { sortOffers } from '../../const';
import { getOffers } from '../../store/main-data/main-data.selectors';
import { getLocationName, getSortingMethod } from '../../store/main-process/main-process.selectors';
import { Offer } from '../../types/offer';
import { fetchOffersAction } from '../../store/api-actions/offers-api-actions/offers-api-actions';

function useFilteredAndSortedOffers(): Offer[] {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const selectedCityName = useAppSelector(getLocationName);
  const selectedSortingMethod = useAppSelector(getSortingMethod);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return sortOffers(offers, selectedSortingMethod)
    .filter((offer) => offer.city.name === selectedCityName);
}

export default useFilteredAndSortedOffers;
