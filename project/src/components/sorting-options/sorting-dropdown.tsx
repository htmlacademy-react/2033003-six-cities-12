import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import SortingOption from './sorting-option';

type SortingDropdownProps = {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

function SortingDropdown({ options, selectedOption, onOptionSelect }: SortingDropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
  //TODO: не понятно почему span и ul без пробела в интерфейсе отображается
    <Fragment>
      <span className={`places__sorting-type${isOpen ? ' places__sorting-type--active' : ''}`} tabIndex={0} onClick={toggleDropdown}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpen ? ' places__options--opened' : ''}`} onClick={toggleDropdown}>
        {options.map((option) => (
          <SortingOption key={option} text={option} active={option === selectedOption} onClick={() => onOptionSelect(option)} />
        ))}
      </ul>
    </Fragment>
  );
}

export default SortingDropdown;