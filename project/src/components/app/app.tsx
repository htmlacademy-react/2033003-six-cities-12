import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  nearbyOffers: Offer[];
  reviews: Review[];
}

function App({nearbyOffers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
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
        <Route path={AppRoute.Room} element={<RoomScreen nearbyOffers={nearbyOffers} reviews={reviews}/>}/>
        <Route path={'*'} element={<NotFoundScreen/>}/>
        <Route path={AppRoute.NotFound} element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
