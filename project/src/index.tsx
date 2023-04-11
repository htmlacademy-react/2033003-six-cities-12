import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { nearbyOffers } from './mocks/offers';
import { reviews } from './mocks/review';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App reviews={reviews} nearbyOffers={nearbyOffers}/>
    </Provider>
  </React.StrictMode>,
);
