import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { nearbyOffers } from './mocks/offers';
import { reviews } from './mocks/review';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} nearbyOffers={nearbyOffers}/>
    </Provider>
  </React.StrictMode>,
);
