import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string => state[NameSpace.User].email;
export const getUserAvatarUrl = (state: State): string => state[NameSpace.User].avatarUrl;
