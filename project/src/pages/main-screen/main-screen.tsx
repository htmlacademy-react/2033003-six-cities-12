import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import OffersEmptyList from '../../components/offers-empty-list/offers-empty-list';
import OffersList from '../../components/offers-list/offers-list';
import Layout from '../../components/layout/layout';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import useFilteredAndSortedOffers from '../../hooks/use-filtered-and-sorted-offers/use-filtered-and-sorted-offers';
import { Offer } from '../../types/offer';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { isDataLoading } from '../../store/main-data/main-data.selectors';
import { AuthorizationStatus } from '../../const';
import { getLocationName } from '../../store/main-process/main-process.selectors';

function MainScreen() : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);

  const selectedCityName = useAppSelector(getLocationName);
  const filteredAndSortedOffers: Offer[] = useFilteredAndSortedOffers();
  const city = filteredAndSortedOffers.find((offer) => offer.city.name === selectedCityName)?.city ?? null;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(isDataLoading);

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading;
  if(!isLoading){

    return(
      <Layout className={`page page--gray page--main ${filteredAndSortedOffers.length === 0 ? 'page--main-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${filteredAndSortedOffers.length > 0 ? 'cities__places-container--empty' : ''}`}>
            {filteredAndSortedOffers.length > 0 ?
              <OffersList onSetActiveOffer={setActiveOffer} filteredAndSortedOffers={filteredAndSortedOffers}/>
              :
              <OffersEmptyList/>}
            <div className="cities__right-section">
              {city ?
                <Map city={city} activeOfferId={activeOfferId} offers={filteredAndSortedOffers} wrapperClassName={'cities__map'}/> :
                <section className='cities__map map'></section>}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return (<LoadingScreen/>);
}

export default MainScreen;
