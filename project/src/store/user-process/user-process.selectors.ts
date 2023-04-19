import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string | undefined => state[NameSpace.User].email;
export const getUserAvatarUrl = (state: State): string => state[NameSpace.User].avatarUrl;
export const getUserId = (state: State): number | null => state[NameSpace.User].userId;
export const getUserIsProStatus = (state: State): boolean => state[NameSpace.User].isPro;
