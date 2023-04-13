import { Link, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Fragment, MouseEventHandler, useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getFavoriteOffers, getOffers } from '../../store/main-data/main-data.selectors';

function FavoritesScreen() :JSX.Element {
  const navigate = useNavigate();
  const favoriteOffers: Offer[] = useAppSelector(getFavoriteOffers);
  const cities: string[] = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(AppRoute.Login);
    }
  }, [isLoggedIn, navigate]);

  const handleGoMainClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Main);
  };

  return(
    <div className="page">
      <Header/>

      <main className={`page__main page__main--favorites ${favoriteOffers.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${favoriteOffers.length === 0 ? 'favorites--empty' : ''}`}>
            { favoriteOffers.length > 0 ? (
              <Fragment>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cities.map((city) => (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="#">
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {favoriteOffers
                          .filter(({ city: { name } }) => name === city)
                          .map(({ id, isPremium, previewImage, price, isFavorite, rating, title, type }) => (
                            <article key={`${city}-${id}`} className="favorites__card place-card">
                              {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
                              <div className="favorites__image-wrapper place-card__image-wrapper">
                                <Link to="#">
                                  <img className="place-card__image" src={previewImage} width="150" height="110" alt={`${title}`}/>
                                </Link>
                              </div>
                              <div className="favorites__card-info place-card__info">
                                <div className="place-card__price-wrapper">
                                  <div className="place-card__price">
                                    <b className="place-card__price-value">&euro;{price}</b>
                                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                                  </div>
                                  <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
                                    <svg className="place-card__bookmark-icon" width="18" height="19">
                                      <use xlinkHref="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">In bookmarks</span>
                                  </button>
                                </div>
                                <div className="place-card__rating rating">
                                  <Rating rating={rating}/>
                                </div>
                                <h2 className="place-card__name">
                                  <Link to="#">{title}</Link>
                                </h2>
                                <p className="place-card__type">{type}</p>
                              </div>
                            </article>))}
                      </div>
                    </li>
                  ))}
                </ul>
              </Fragment>
            ) : (
              <Fragment>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </Fragment>)}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="#" onClick={handleGoMainClick}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
export default FavoritesScreen;
