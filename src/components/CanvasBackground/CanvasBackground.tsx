import * as React from 'react';
import { CanvasBackgroundContextValues } from '../../contexts';

interface CanvasBackgroundProps {
}

export const CanvasBackground: React.FunctionComponent<CanvasBackgroundProps> = (props) => {
  const { canvasBackgroundValues, setCanvasBackgroundValues } = React.useContext(CanvasBackgroundContextValues);

  React.useEffect(() => {
    let fileReader: FileReader, isCancel: boolean = false;
    if (canvasBackgroundValues.fileImage) {
      let file = canvasBackgroundValues.fileImage
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target && !isCancel) {
          setCanvasBackgroundValues({ ...canvasBackgroundValues, fileImageURL: e.target.result })
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }
  }, [canvasBackgroundValues, setCanvasBackgroundValues]);

  const handleDrop = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setCanvasBackgroundValues({ ...canvasBackgroundValues, fileImage: files[0] })
  }, [canvasBackgroundValues, setCanvasBackgroundValues]);

  const handleDragOver = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return <div className="bg-gray-light py-2 px-0">
    <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
      <h1 className="fs-6 fw-bold mb-0">Background</h1>
      <input type="color" className="form-control form-control-color" id="BackgroundColorPicker" defaultValue="#0E9842" title="Choose your color"></input>
    </div>
    <div className="px-3 mt-3">
      <div
        className="drag-and-drop-container mb-3 user-select-none px-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {canvasBackgroundValues.fileImageURL ?
          <img id="backgroundSmallImage" src={`${canvasBackgroundValues.fileImageURL}`} alt="Added images" /> :
          "Drag and Drop Image Here"
        }
      </div>
      <label htmlFor="BackgroundHorizontalRange" className="form-label">Horizontal Position (0 px)</label>
      <input type="range" id="BackgroundHorizontalRange" className="form-range custom-range"></input>
      <label htmlFor="BackgroundVerticalRange" className="form-label">Vertical Position (0 px)</label>
      <input type="range" id="BackgroundVerticalRange" className="form-range custom-range"></input>
      <label htmlFor="BackgroundScaleRange" className="form-label">Scale (100%)</label>
      <input type="range" id="BackgroundScaleRange" className="form-range custom-range"></input>
    </div>
  </div >;
};