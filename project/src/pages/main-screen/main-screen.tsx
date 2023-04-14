import { memo, useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getCity, getFilteredAndSortedOffers, isOffersDataLoading } from '../../store/main-data/main-data.selectors';
import OffersEmptyList from '../../components/offers/offers-empty-list';
import OffersList from '../../components/offers/offers-list';

function MainScreen() : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const filteredAndSortedOffers: Offer[] = useAppSelector(getFilteredAndSortedOffers);
  const city = useAppSelector(getCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(isOffersDataLoading);
  const isLoading = authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading;

  if(!isLoading){
    const MemoizedHeader = memo(Header);
    const MemoizedLocationList = memo(LocationList);

    return(
      <div className={`page page--gray page--main ${filteredAndSortedOffers.length === 0 ? 'page--main-empty' : ''}`}>
        <MemoizedHeader/>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MemoizedLocationList/>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${filteredAndSortedOffers.length > 0 ? 'cities__places-container--empty' : ''}`}>
            {filteredAndSortedOffers.length > 0 ?
              <OffersList onSetActiveOffer={setActiveOffer}/>
              :
              <OffersEmptyList/>}
            <div className="cities__right-section">
              {city ?
                <Map city={city} activeOfferId={activeOfferId} offers={filteredAndSortedOffers} wrapperClassName={'cities__map'}/> :
                <section className='cities__map map'></section>}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (<LoadingScreen/>);
}

export default MainScreen;
