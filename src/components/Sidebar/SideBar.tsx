import { CanvasBackgroundContextProvider, CanvasHeadlineContextProvider, CanvasGradientContextProvider } from '../../contexts';
import { CanvasBackground } from '../CanvasBackground/CanvasBackground';
import { CanvasHeadline } from '../CanvasHeadline/CanvasHeadline';
import { CanvasGradient } from '../CanvasGradient/CanvasGradient';
import keitaroLogo from '../../assets/svg/keitaro-logo-full-color.svg';

export const SideBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div data-testid="Sidebar" className={className}>
      <div className="bg-gray-light sticky-top d-flex justify-content-center flex-column align-items-center py-5">
        <img className="mb-2" width={"200px"} src={keitaroLogo} alt="Keitaro Logo" />
        <p className="mb-0 bg-white py-1 px-2 fs-6 fw-bold">
          Blog Image Generator
        </p>
      </div>
      <CanvasHeadlineContextProvider>
        <CanvasHeadline />
      </CanvasHeadlineContextProvider>
      <CanvasGradientContextProvider>
        <CanvasGradient />
      </CanvasGradientContextProvider>
      <CanvasBackgroundContextProvider>
        <CanvasBackground />
      </CanvasBackgroundContextProvider>
    </div>
  );
};
