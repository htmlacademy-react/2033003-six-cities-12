import { Dispatch, SetStateAction, useState } from 'react';
import { useAppSelector } from '..';
import { AuthorizationStatus } from '../../const';
import { isOffersDataLoading } from '../../store/main-data/main-data.selectors';
import { getLocationName } from '../../store/main-process/main-process.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import useFilteredAndSortedOffers from '../use-filtered-and-sorted-offers/use-filtered-and-sorted-offers';

type UseMainScreenProps = {
  filteredAndSortedOffers: Offer[];
  city: City | null;
  activeOfferId: number;
  setActiveOffer: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
};

function useMainScreen(): UseMainScreenProps {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const selectedCityName = useAppSelector(getLocationName);
  const filteredAndSortedOffers: Offer[] = useFilteredAndSortedOffers();
  const city = filteredAndSortedOffers.find((offer) => offer.city.name === selectedCityName)?.city ?? null;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(isOffersDataLoading);

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading;

  return {
    filteredAndSortedOffers,
    city,
    activeOfferId,
    setActiveOffer,
    isLoading,
  };
}

export default useMainScreen;
