import { Link, useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Fragment, useEffect } from 'react';
import { getFavoriteOffers } from '../../store/main-data/main-data.selectors';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Layout from '../../components/layout/layout';
import { fetchFavoriteOffersAction } from '../../store/api-actions/offers-api-actions/offers-api-actions';
import { useIsLoggedIn } from '../../hooks/use-is-logged-in/use-is-logged-in';
import { useGoToMain } from '../../hooks/use-go-main/use-go-main';

function FavoritesScreen() :JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteOffers: Offer[] = useAppSelector(getFavoriteOffers);
  const isLoggedIn = useIsLoggedIn(AuthorizationStatus.Auth);
  const handleGoMainClick = useGoToMain();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch, favoriteOffers]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(AppRoute.Login);
    }
  }, [isLoggedIn, navigate]);

  return(
    <Layout className="page">
      <main className={`page__main page__main--favorites ${favoriteOffers.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${favoriteOffers.length === 0 ? 'favorites--empty' : ''}`}>
            { favoriteOffers.length > 0 ? (
              <Fragment>
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList/>
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
    </Layout>
  );
}
export default FavoritesScreen;
