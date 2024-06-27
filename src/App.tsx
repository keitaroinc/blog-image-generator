import "./assets/scss/style.scss";
import "bootstrap/dist/js/bootstrap";
import { CanvasWrapper, SideBar } from "./components";
import { CanvasPreviewContextProvider } from "./contexts/CanvasPreviewContext";

export const App = () => {
  return (
    <CanvasPreviewContextProvider>
      <div className="row g-0">
        <SideBar className="col-xl-3 sidebar" />
        <CanvasWrapper className="col-xl-9 canvas-wrapper" />
      </div>
    </CanvasPreviewContextProvider>
  );
};