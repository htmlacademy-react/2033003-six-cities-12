import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
