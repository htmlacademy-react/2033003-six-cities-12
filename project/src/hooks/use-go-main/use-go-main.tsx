import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export const useGoToMain = (): ((event: React.MouseEvent<HTMLAnchorElement>) => void) => {
  const navigate = useNavigate();
  const handleGoMainClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    navigate(AppRoute.Main);
  };
  return handleGoMainClick;
}