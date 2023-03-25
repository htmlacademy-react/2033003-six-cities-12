import { useState } from 'react';
import Header from '../../components/header/header';
import LocationList from '../../components/location/location-list';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import { Offer } from '../../types/offer';

type MainScreenProps = {
  offers: Offer[];
}
function MainScreen({offers} : MainScreenProps) : JSX.Element {
  const [activeOfferId, setActiveOffer] = useState<number>(-1);
  const city = offers[0].city;
  return(
    <div className="page page--gray page--main">
      <Header offers={offers}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <Offers offers={offers} setActiveOffer={setActiveOffer}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} activeOfferId={activeOfferId} offers={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
