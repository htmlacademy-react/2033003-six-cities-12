import { MouseEventHandler, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../types/state';

type HeaderProps = {
  offers: Offer[];
}

function Header({offers}: HeaderProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const authorizationStatus = useAppSelector((state: RootState) => state.authorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;


  const handleGoMainClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Main);
  };

  const handleFavoritesClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Favorites);
  };

  const handleLogout: MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(logoutAction());
  };

  const handleLogin: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Login);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="#" onClick={handleGoMainClick}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isLoggedIn ? (
                <Fragment>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="#" onClick={handleFavoritesClick}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#">
                      <span className="header__signout" onClick={handleLogout}>Sign out</span>
                    </Link>
                  </li>
                </Fragment>
              ) : (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login" onClick={handleLogin}>Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
