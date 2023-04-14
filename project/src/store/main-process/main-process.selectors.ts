import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getLocationName = (state: State): string => state[NameSpace.Main].locationName;
export const getSortingMethod = (state: State): string => state[NameSpace.Main].sortingMethod;
