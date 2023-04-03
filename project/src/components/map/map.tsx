import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

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
};

function Map({city, activeOfferId, offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    let markers: Marker[] = [];

      if(map){
        offers.forEach((offer) => {
          const marker = new Marker({
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
    <div style={{ height: '500px' }} ref={mapRef} />
  );
}
export default Map;
