import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { changeCity } from '../../store/main-process/main-process.slice';

const useHandleQuickCityClick = (quickCity: string): MouseEventHandler<HTMLAnchorElement> => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuickCityClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.Main);
    dispatch(changeCity(quickCity));
  };

  return handleQuickCityClick;
};

export default useHandleQuickCityClick;
