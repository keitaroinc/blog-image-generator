import * as React from 'react';
import { CanvasIconContextValues } from '../../contexts';

interface CanvasIconProps {
}

export const CanvasIcon: React.FunctionComponent<CanvasIconProps> = (props) => {
  const { canvasIconValues, setCanvasIconValues } = React.useContext(CanvasIconContextValues)
  React.useEffect(() => {
    let fileReader: FileReader, isCancel: boolean = false;
    if (canvasIconValues.fileImage) {
      let file = canvasIconValues.fileImage
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target && !isCancel) {
          setCanvasIconValues({ ...canvasIconValues, fileImageURL: e.target.result })
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
  }, [canvasIconValues, setCanvasIconValues]);

  const handleDrop = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setCanvasIconValues({ ...canvasIconValues, fileImage: files[0] })
  }, [canvasIconValues, setCanvasIconValues]);

  const handleDragOver = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return <div className="bg-gray-light py-2 px-0">
    <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
      <h1 className="fs-6 fw-bold mb-0">Icon</h1>
      <input type="color" className="form-control form-control-color" id="IconColorPicker" defaultValue="#0E9842" title="Choose your color"></input>
    </div>
    <div className="px-3 mt-3">
      <div
        className="drag-and-drop-container mb-3 user-select-none px-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {canvasIconValues.fileImageURL ?
          <img id="iconSmallImage" src={`${canvasIconValues.fileImageURL}`} alt="Added images" /> :
          "Drag and Drop your transparent image here..."
        }
      </div>
      <label htmlFor="IconHorizontalRange" className="form-label">Horizontal Position (0 px)</label>
      <input type="range" id="IconHorizontalRange" className="form-range custom-range"></input>
      <label htmlFor="IconVerticalRange" className="form-label">Vertical Position (0 px)</label>
      <input type="range" id="IconVerticalRange" className="form-range custom-range"></input>
    </div>
  </div >;
};