import { Routes, Route } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen/>}/>
          <Route path={AppRoute.Login} element={<LoginScreen/>}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<RoomScreen/>}/>
          <Route path={'*'} element={<NotFoundScreen/>}/>
          <Route path={AppRoute.NotFound} element={<NotFoundScreen/>}/>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
