import { useAppSelector } from "../../hooks";

const errorMessageStyle = {
  backgroundColor: '#ffe6e6',
  border: '1px solid #ff3333',
  borderRadius: '4px',
  color: '#ff3333',
  marginBottom: '16px',
  padding: '8px 16px',
};

function ErrorMessage(): JSX.Element | null{
  const error = useAppSelector((state) => state.error);
  return (error) 
    ? <div style={errorMessageStyle}><p>{error}</p></div>
    : null;
};
export default ErrorMessage;
