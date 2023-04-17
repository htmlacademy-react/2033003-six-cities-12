import { Fragment, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type SignOutProps = {
  onFavoritesClick: MouseEventHandler<HTMLAnchorElement>;
  avatarUrl: string;
  email: string;
  favoriteOffers: Offer[];
  onLogout: MouseEventHandler<HTMLAnchorElement>;
}

function SignOut({onFavoritesClick, avatarUrl, email, favoriteOffers, onLogout}: SignOutProps): JSX.Element {
  return (
    <Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="#" onClick={onFavoritesClick}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="6 cities logo"/>
          </div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="#">
          <span className="header__signout" onClick={onLogout}>Sign out</span>
        </Link>
      </li>
    </Fragment>
  );
}
export default SignOut;
