import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string | undefined => state[NameSpace.User].email;
export const getUserAvatarUrl = (state: State): string => state[NameSpace.User].avatarUrl;
export const getSubmittingStatus = (state: State): boolean => state[NameSpace.User].isSubmitting;
