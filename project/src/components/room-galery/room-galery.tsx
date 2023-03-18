import {Offer } from '../../types/offer';
type OfferProps = {
  offer: Offer;
}
function RoomGalery({offer}: OfferProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((picture, index) => (
          <div key={`${offer.id}-${String(index)}`} className="property__image-wrapper">
            <img className="property__image" src={picture} alt={`Interior ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default RoomGalery;
