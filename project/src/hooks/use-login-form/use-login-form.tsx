import { FormEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { AppRoute, AuthorizationStatus, LOCATIONS, isValidPassword } from '../../const';
import { loginAction } from '../../store/api-actions/auth-api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { toast } from 'react-toastify';
import { changeCity } from '../../store/main-process/main-process.slice';

type AuthData = {
  login: string;
  password: string;
}

function useLoginForm(){
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isLoggedIn) {
      navigate(AppRoute.Main);
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = (authData: AuthData) => {
    setIsSubmitting(true);

    if (!isValidPassword(authData.password)) {
      toast.warn('Password must contain at least one letter and one number.');
      setIsSubmitting(false);
      return;
    }

    dispatch(loginAction(authData))
      .then(() => {
        setIsSubmitting(false);
        navigate(AppRoute.Main);
      })
      .catch(() => setIsSubmitting(false));
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

  const handleGoMainClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Main);
  };

  const quickCity = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

  const handleQuickCityClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Main);

    dispatch(changeCity(quickCity));
  };

  return {
    loginRef,
    passwordRef,
    isSubmitting,
    handleSubmit,
    handleGoMainClick,
    handleQuickCityClick,
    quickCity
  };
}

export default useLoginForm;
