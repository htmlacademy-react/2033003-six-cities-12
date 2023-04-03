import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

const mapStyles = {
  height: '100%'
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

type MapProps = {
  city: City;
  activeOfferId: number | null;
  offers: Offer[];
  wrapperClassName: string;
};

function Map({city, activeOfferId, offers, wrapperClassName}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if(map){
      offers.forEach((offer) => {
        const marker: Marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        if (offer.id === activeOfferId) {
          marker.setIcon(currentCustomIcon);
        } else {
          marker.setIcon(defaultCustomIcon);
        }
        marker.addTo(map);
        markers.push(marker);
      });
      return () => {
        markers.forEach((marker) => marker.removeFrom(map));
      };
    }
  }, [city, activeOfferId, offers, map]);

  return (
    <section className={`${wrapperClassName} map`}>
      <div style={mapStyles} ref={mapRef} />
    </section>
  );
}
export default Map;
