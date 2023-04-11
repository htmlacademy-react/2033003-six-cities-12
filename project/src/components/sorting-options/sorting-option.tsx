type SortingOptionProps = {
  text: string;
  active: boolean;
  handleClick: () => void;
}

function SortingOption({ text, active, handleClick }: SortingOptionProps): JSX.Element {
  return (
    <li className={`places__option${active ? ' places__option--active' : ''}`} onClick={handleClick} tabIndex={0}>
      {text}
    </li>
  );
}

export default SortingOption;
