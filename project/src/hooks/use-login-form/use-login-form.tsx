import { FormEvent, MouseEventHandler, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '..';
import { AppRoute, AuthorizationStatus, LOCATIONS, isValidPassword } from '../../const';
import { loginAction } from '../../store/api-actions/auth-api-actions/auth-api-actions';
import { toast } from 'react-toastify';
import { changeCity } from '../../store/main-process/main-process.slice';
import { useGoToMain } from '../use-go-main/use-go-main';
import { useIsLoggedIn } from '../use-is-logged-in/use-is-logged-in';
import useHandleQuickCityClick from '../use-handle-quick-city-click/use-handle-quick-city-click';

type AuthData = {
  login: string;
  password: string;
}

function useLoginForm(){
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isLoggedIn = useIsLoggedIn(AuthorizationStatus.Auth);

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

  const handleQuickCityClick = useHandleQuickCityClick(quickCity);

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
