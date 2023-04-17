import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";


type HeaderLogoProps = {
  onGoMainClick: MouseEventHandler<HTMLAnchorElement>;
}

function HeaderLogo({onGoMainClick}: HeaderLogoProps): JSX.Element {
  return (
    <div className="header__left">
      <Link className="header__logo-link"  to="#" onClick={onGoMainClick}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default HeaderLogo;