import { MouseEventHandler, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserAvatarUrl, getUserEmail } from '../../store/user-process/user-process.selectors';
import { getOffers } from '../../store/main-data/main-data.selectors';
import { logoutAction } from '../../store/api-actions/auth-api-actions';
import HeaderLogo from './header-logo';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const offers: Offer[] = useAppSelector(getOffers);
  const favoriteOffers: Offer[] = offers.filter((offer) => offer.isFavorite);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const email = useAppSelector(getUserEmail);
  const avatarUrl = useAppSelector(getUserAvatarUrl);
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
          <HeaderLogo onGoMainClick={handleGoMainClick}/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isLoggedIn ? (
                <Fragment>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="#" onClick={handleFavoritesClick}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={avatarUrl} alt="6 cities logo"/>
                      </div>
                      <span className="header__user-name user__name">{email}</span>
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
