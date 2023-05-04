import "./assets/scss/style.scss";
import { CanvasWrapper, SideBar } from "./components";
import { CanvasIconContextProvider, CanvasGradientContextProvider, CanvasHeadlineContextProvider, CanvasLogoContextProvider, CanvasBackgroundContextProvider } from "./contexts";

import { CombineContext } from "./utils/combineContext";

export const App = () => {
  return (
    <div className="row g-0 vh-100 overflow-hidden">
      <SideBar className="col-md-3 col-sm-4 d-flex flex-column bg-gray-light sidebar h-100 overflow-auto" />
      <CombineContext components={[CanvasIconContextProvider, CanvasGradientContextProvider, CanvasHeadlineContextProvider, CanvasLogoContextProvider, CanvasBackgroundContextProvider]}>
        <CanvasWrapper className="col-md-9 col-sm-8 d-flex flex-column justify-content-center align-items-center canvas-wrapper" />
      </CombineContext>
    </div>
  );
};
