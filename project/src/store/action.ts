import { AuthorizationStatus } from './../const';
import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const resetState  = createAction('app/resetState');
export const changeCity = createAction<string>('main/changeCity');
export const setOffers = createAction<Offer[]>('main/setOffers');

export const setSorting = createAction<string>('main/setSorting');
export const filterAndSortOffers = createAction('main/filterAndSortOffers');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('data/setError');
