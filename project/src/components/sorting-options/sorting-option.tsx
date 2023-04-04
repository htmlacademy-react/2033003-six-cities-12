type SortingOptionProps = {
  text: string;
  active: boolean;
  onClick: () => void;
}

function SortingOption({ text, active, onClick }: SortingOptionProps): JSX.Element {
  return (
    <li className={`places__option${active ? ' places__option--active' : ''}`} onClick={onClick} tabIndex={0}>
      {text}
    </li>
  );
}

export default SortingOption;
