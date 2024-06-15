import { Audio } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Audio
        width="80px"
        height="60px"
        color="#76ff03"
        ariaLabel="audio-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </LoaderContainer>
  );
};
