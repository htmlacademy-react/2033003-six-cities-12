import { Link } from 'react-router-dom';
import useLoginForm from '../../hooks/use-login-form/use-login-form';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getSubmittingStatus } from '../../store/user-process/user-process.selectors';

function LoginScreen() : JSX.Element {
  const { loginRef, passwordRef, handleSubmit, handleQuickCityClick, quickCity } = useLoginForm();
  const isSubmitting = useAppSelector(getSubmittingStatus);

  return(
    <div className="page page--gray page--login">
      <Header isLoginScreen/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input data-testid="login" ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input data-testid="password" ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={isSubmitting}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#" onClick={handleQuickCityClick}>
                <span>{quickCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default LoginScreen;
