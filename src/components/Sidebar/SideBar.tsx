import { CanvasHeadlineContextProvider } from '../../contexts/HeadlineContext';
import { CanvasHeadline } from '../CanvasHeadline/CanvasHeadline';

export const SideBar = () => {
  return (
    <div className="side-bar-layout p-0">
      <div className="bg-gray-light sticky-top d-flex justify-content-center flex-column align-items-center py-5">
        <img className="mb-2" src={'keitaroLogo'} alt="Keitaro Logo" />
        <p className="mb-0 bg-white py-1 px-2 fs-6 fw-bold">Blog Image Generator</p>
      </div>
      <CanvasHeadlineContextProvider>
        <CanvasHeadline />
      </CanvasHeadlineContextProvider>
    </div>
  );
};
