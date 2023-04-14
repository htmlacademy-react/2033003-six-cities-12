import { memo, useState } from 'react';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { AuthorizationStatus, sortOffers } from '../../const';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getOffers, isOffersDataLoading } from '../../store/main-data/main-data.selectors';
import OffersEmptyList from '../../components/offers/offers-empty-list';
import OffersList from '../../components/offers/offers-list';
import Layout from '../../components/layout/layout';
import { getLocationName, getSortingMethod } from '../../store/main-process/main-process.selectors';

function MainScreen() : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);

  const offers: Offer[] = useAppSelector(getOffers);
  const selectedCityName = useAppSelector(getLocationName);
  const selectedSortingMethod = useAppSelector(getSortingMethod);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(isOffersDataLoading);

  const filteredAndSortedOffers: Offer[] = sortOffers(offers,selectedSortingMethod)
    .filter((offer) => offer.city.name === selectedCityName);

  const city = filteredAndSortedOffers.find((offer) => offer.city.name === selectedCityName)?.city ?? null;

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading;

  if(!isLoading){
    const MemoizedLocationList = memo(LocationList);

    return(
      <Layout className={`page page--gray page--main ${filteredAndSortedOffers.length === 0 ? 'page--main-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MemoizedLocationList/>
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
