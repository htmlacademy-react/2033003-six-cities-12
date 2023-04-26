import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserAvatarUrl, getUserEmail } from '../../store/user-process/user-process.selectors';
import { getOffers } from '../../store/main-data/main-data.selectors';
import { logoutAction } from '../../store/api-actions/auth-api-actions';
import HeaderLogo from '../header-logo/header-logo';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';
import { useIsLoggedIn } from '../../hooks/use-is-logged-in/use-is-logged-in';

type HeaderProps = {
  isLoginScreen?: boolean;
}

function Header({isLoginScreen}: HeaderProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const offers: Offer[] = useAppSelector(getOffers);
  const favoriteOffers: Offer[] = offers.filter((offer) => offer.isFavorite);
  const email = useAppSelector(getUserEmail);
  const avatarUrl = useAppSelector(getUserAvatarUrl);
  const isLoggedIn = useIsLoggedIn(AuthorizationStatus.Auth);

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
          <HeaderLogo/>
          {!isLoginScreen ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isLoggedIn && email ? (
                  <SignOut
                    avatarUrl={avatarUrl}
                    email={email}
                    favoriteOffers={favoriteOffers}
                    onFavoritesClick={handleFavoritesClick}
                    onLogout={handleLogout}
                  />
                ) : (
                  <SignIn onLogin={handleLogin}/>
                )}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
export default Header;
