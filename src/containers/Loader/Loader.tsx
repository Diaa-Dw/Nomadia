import { LoaderContainer } from './Loader.style';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <LoaderContainer>
      <DotLottieReact
        src="https://lottie.host/43fc89d2-859a-4501-a3cd-3155e3daa043/AKSerqDwoZ.lottie"
        loop
        autoplay
        style={{ height: '200px', width: '200px' }}
      />
    </LoaderContainer>
  );
};

export default Loader;
