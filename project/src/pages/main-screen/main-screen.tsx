import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import OffersEmptyList from '../../components/offers/offers-empty-list';
import OffersList from '../../components/offers/offers-list';
import Layout from '../../components/layout/layout';
import useMainScreen from '../../hooks/use-main-screen/use-main-screen';

function MainScreen() : JSX.Element {
  const { filteredAndSortedOffers, city, activeOfferId, setActiveOffer, isLoading } = useMainScreen();

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
