import { useEffect, useState } from 'react';
import { useAppDispatch } from '..';
import { toggleFavoriteAction } from '../../store/api-actions/offers-api-actions/offers-api-actions';

function useFavorites(offerId: number, initialIsFavorite: boolean) {
  const dispatch = useAppDispatch();
  const [isOfferFavorite, setIsOfferFavorite] = useState(initialIsFavorite);

  useEffect(() => {
    setIsOfferFavorite(initialIsFavorite);
  }, [initialIsFavorite]);

  const toggleFavorite = () => {
    const newStatus = !isOfferFavorite;
    dispatch(toggleFavoriteAction({
      offerId: offerId,
      status: newStatus,
    }));
    setIsOfferFavorite(newStatus);
  };

  return { isOfferFavorite, toggleFavorite };
}

export default useFavorites;
