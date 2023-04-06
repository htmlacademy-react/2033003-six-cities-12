import { css } from '@emotion/react';
import {RingLoader} from 'react-spinners';

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
};

function LoadingScreen():JSX.Element {
  return (
    <div style={loadingStyle}>
      <RingLoader size={150} color={'#123abc'} loading={true} />
    </div>
  );
}

export default LoadingScreen;
