import { AppRoute } from './../const';
import {createAction} from '@reduxjs/toolkit';

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const resetSubmittingSuccessStatus = createAction('main/resetSubmittingSuccessStatus');


