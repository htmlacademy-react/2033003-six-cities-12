import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type SignInProps = {
  onLogin: MouseEventHandler<HTMLAnchorElement>;
}

function SignIn({onLogin}: SignInProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login" onClick={onLogin}>Sign in</span>
      </Link>
    </li>
  );
}
export default SignIn;