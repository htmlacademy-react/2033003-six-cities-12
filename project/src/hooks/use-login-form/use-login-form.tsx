import { FormEvent, MouseEventHandler, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { AppRoute, AuthorizationStatus, LOCATIONS, isValidPassword } from '../../const';
import { loginAction } from '../../store/api-actions/auth-api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { toast } from 'react-toastify';
import { changeCity } from '../../store/main-process/main-process.slice';
import { useGoToMain } from '../use-go-main/use-go-main';

type AuthData = {
  login: string;
  password: string;
}

function useLoginForm(){
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isLoggedIn) {
      navigate(AppRoute.Main);
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = (authData: AuthData) => {
    if (!isValidPassword(authData.password)) {
      toast.warn('Password must contain at least one letter and one number.');
      return;
    }
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handleGoMainClick = useGoToMain();

  const quickCity = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

  const handleQuickCityClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Main);

    dispatch(changeCity(quickCity));
  };

  return {
    loginRef,
    passwordRef,
    handleSubmit,
    handleGoMainClick,
    handleQuickCityClick,
    quickCity
  };
}

export default useLoginForm;
