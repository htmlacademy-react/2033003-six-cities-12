import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '..';
import { Offer } from '../../types/offer';
import { fetchFavoriteOffersAction } from '../../store/api-actions/offers-api-actions';
import { getFavoriteOffers } from '../../store/main-data/main-data.selectors';

export const useFetchFavoriteOffers = (): Offer[] => {
  const dispatch = useAppDispatch();
  const favoriteOffers: Offer[] = useAppSelector(getFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return favoriteOffers;
}