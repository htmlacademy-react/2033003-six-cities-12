import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { AppRoute, AuthorizationStatus } from '../../const';
import { loginAction } from '../../store/api-actions/auth-api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

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

  return {
    loginRef,
    passwordRef,
    isSubmitting,
    handleSubmit,
  };
}

export default useLoginForm;
