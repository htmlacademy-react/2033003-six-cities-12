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
  const markers = useRef<Marker[]>([]);

  useEffect(() => {
    if (map) {
      markers.current.forEach((markerItem) => markerItem.removeFrom(map));
      markers.current = [];

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        if(offer.id === activeOfferId){
          marker.setIcon(currentCustomIcon).addTo(map);
        }else{
          marker.setIcon(defaultCustomIcon).addTo(map);
        }
        markers.current.push(marker);
      });
    }
    return () => {
      if (map) {
        markers.current.forEach((markerItem) => markerItem.removeFrom(map));
        markers.current = [];
        offers.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });
          marker.setIcon(defaultCustomIcon).addTo(map);
          markers.current.push(marker);
        });
      }
    };
  }, [map, offers, activeOfferId, markers]);
  return (
    <div style={{ height: '500px' }} ref={mapRef} />
  );
}
export default Map;
