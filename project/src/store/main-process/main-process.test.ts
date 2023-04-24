import { LOCATIONS, SortType } from '../../const';
import { MainState } from '../../types/state';
import { changeCity, changeSorting, mainProcess } from './main-process.slice';

describe('Reducer: main-process', () => {
  let initialState: MainState;

  beforeEach(() =>{
    initialState = {
      locationName: LOCATIONS[0],
      sortingMethod: SortType.POPULAR,
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(mainProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should handle changeCity', () => {
    const nextState = mainProcess.reducer(initialState, changeCity(LOCATIONS[1]));
    expect(nextState.locationName).toEqual(LOCATIONS[1]);
    expect(nextState.sortingMethod).toEqual(SortType.POPULAR);
  });

  it('should handle changeSorting', () => {
    const nextState = mainProcess.reducer(initialState, changeSorting(SortType.CHEAP));
    expect(nextState.locationName).toEqual(LOCATIONS[0]);
    expect(nextState.sortingMethod).toEqual(SortType.CHEAP);
  });
});
