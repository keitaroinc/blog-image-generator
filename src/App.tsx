import "./assets/scss/style.scss";
import 'bootstrap/dist/js/bootstrap';
import { CanvasWrapper, SideBar } from "./components";
import { CanvasPreviewContextProvider } from "./contexts/CanvasPreviewContext";


export const App = () => {
  return (
    <div className="row g-0 vh-100 overflow-hidden">
      <CanvasPreviewContextProvider>
        <SideBar className="col-md-3 d-flex flex-column bg-gray-light sidebar h-100 overflow-auto" />
        <CanvasWrapper className="col-md-9 d-flex flex-column justify-content-center align-items-center canvas-wrapper" />
      </CanvasPreviewContextProvider>
    </div>
  );
};
