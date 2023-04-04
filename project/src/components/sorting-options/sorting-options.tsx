import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterAndSortOffers, setSorting } from '../../store/action';
import SortingDropdown from './sorting-dropdown';

function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector((state) => state.sortingMethod);
  const options = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  const handleOptionSelect = (option: string) => {
    dispatch(setSorting(option));
    dispatch(filterAndSortOffers());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <SortingDropdown options={options} selectedOption={selectedOption} onOptionSelect={handleOptionSelect}/>
    </form>
  );
}

export default SortingOptions;
