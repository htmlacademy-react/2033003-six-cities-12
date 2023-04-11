type SortingOptionProps = {
  text: string;
  active: boolean;
  onOptionSelect: () => void;
}

function SortingOption({ text, active, onOptionSelect }: SortingOptionProps): JSX.Element {
  const handleOptionSelect = () => {
    onOptionSelect();
  };

  return (
    <li className={`places__option${active ? ' places__option--active' : ''}`} onClick={handleOptionSelect} tabIndex={0}>
      {text}
    </li>
  );
}

export default SortingOption;
