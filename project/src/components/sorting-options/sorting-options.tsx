import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SortingDropdown from './sorting-dropdown';
import { getSortingMethod } from '../../store/main-process/main-process.selectors';
import { changeSorting } from '../../store/main-process/main-process.slice';
import { OPTIONS } from '../../const';

function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector(getSortingMethod);


  const onOptionSelect = useCallback((option: string) => {
    dispatch(changeSorting(option));
  }, [dispatch]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <SortingDropdown options={OPTIONS} selectedOption={selectedOption} onOptionSelect={onOptionSelect}/>
    </form>
  );
}

export default memo(SortingOptions);
