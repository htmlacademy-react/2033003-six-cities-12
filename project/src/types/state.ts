import {store} from '../store/index.js';

export type RootState = {
  locationName: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
