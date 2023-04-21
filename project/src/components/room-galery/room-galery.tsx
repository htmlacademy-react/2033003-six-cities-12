import { memo } from 'react';
import { MAX_IMAGES } from '../../const';
import {Offer } from '../../types/offer';
type OfferProps = {
  offer: Offer;
}
function RoomGalery({offer}: OfferProps): JSX.Element {
  const displayedImages = offer.images.slice(0, MAX_IMAGES);
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {displayedImages.map((picture, index) => (
          <div key={`${offer.id}-${String(index)}`} className="property__image-wrapper">
            <img className="property__image" src={picture} alt={`Interior ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(RoomGalery);
