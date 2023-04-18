import { LOCATIONS, SortType } from '../../const';
import { changeCity, changeSorting, mainProcess } from './main-process.slice';

describe('Reducer: main-process', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({locationName: LOCATIONS[0], sortingMethod: SortType.POPULAR});
  });

  it('should handle changeCity', () => {
    const previousState = {locationName: LOCATIONS[0], sortingMethod: SortType.POPULAR};
    const nextState = mainProcess.reducer(previousState, changeCity(LOCATIONS[1]));
    expect(nextState.locationName).toEqual(LOCATIONS[1]);
    expect(nextState.sortingMethod).toEqual(SortType.POPULAR);
  });

  it('should handle changeSorting', () => {
    const previousState = {locationName: LOCATIONS[0], sortingMethod: SortType.POPULAR};
    const nextState = mainProcess.reducer(previousState, changeSorting(SortType.CHEAP));
    expect(nextState.locationName).toEqual(LOCATIONS[0]);
    expect(nextState.sortingMethod).toEqual(SortType.CHEAP);
  });
});
