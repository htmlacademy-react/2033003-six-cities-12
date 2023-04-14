import { memo, useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { Offer } from '../../types/offer';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getLocationName } from '../../store/main-process/main-process.selectors';
import { getCity, getFilteredAndSortedOffers, isOffersDataLoading } from '../../store/main-data/main-data.selectors';

function MainScreen() : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const selectedCityName = useAppSelector(getLocationName);
  const filteredAndSortedOffers: Offer[] = useAppSelector(getFilteredAndSortedOffers);
  const city = useAppSelector(getCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(isOffersDataLoading);
  const isLoading = authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading;

  if(!isLoading){
    const MemoizedHeader = memo(Header);
    const MemoizedSortingOptions = memo(SortingOptions);
    const MemoizedLocationList = memo(LocationList);
    const MemoizedOffers = memo(Offers);

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
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredAndSortedOffers.length} places to stay in {selectedCityName}</b>
                <MemoizedSortingOptions/>
                <MemoizedOffers setActiveOffer={setActiveOffer}/>
              </section> :
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {selectedCityName}</p>
                </div>
              </section>}
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
