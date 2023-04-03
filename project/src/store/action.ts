import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('main/changeCity');
export const setOffers = createAction<Offer[]>('main/setOffers');
