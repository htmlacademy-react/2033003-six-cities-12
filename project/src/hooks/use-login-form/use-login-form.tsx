import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { loginAction } from '../../store/api-actions/auth-api-actions';

type AuthData = {
  login: string;
  password: string;
}

function useLoginForm(){
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    isLoggedIn,
    isSubmitting,
    handleSubmit,
  };
}

export default useLoginForm;
