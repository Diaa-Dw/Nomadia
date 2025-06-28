import { LoaderContainer } from './Loader.style';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <LoaderContainer>
      <DotLottieReact
        src="https://lottie.host/afa9a189-a34a-4f6d-b349-6adf70db2640/u9VRKDS4Hw.lottie"
        loop
        autoplay
        style={{ height: '200px', width: '200px' }}
      />
    </LoaderContainer>
  );
};

export default Loader;
