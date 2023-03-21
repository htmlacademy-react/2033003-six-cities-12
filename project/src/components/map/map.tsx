import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: City;
  offers: Offer[];
};

function Map({city, offers}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers]);
  return(
    <section className="cities__map map">
      <div style={{height: '500px'}} ref={mapRef}></div>
    </section>
  );
}
export default Map;