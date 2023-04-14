import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainState } from '../../types/state';
import { SortType } from '../../const';

const initialState: MainState = {
  locationName: 'Paris',
  sortingMethod: SortType.POPULAR,
};

export const mainProcess = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.locationName = action.payload;
    },
    changeSorting: (state, action: PayloadAction<string>) => {
      state.sortingMethod = action.payload;
    },
  },
});
export const { changeCity, changeSorting } = mainProcess.actions;
