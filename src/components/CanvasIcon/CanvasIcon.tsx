import * as React from 'react';
import { CanvasIconContextValues } from '../../contexts';

interface CanvasIconProps {
}

export const CanvasIcon: React.FunctionComponent<CanvasIconProps> = (props) => {
  const { canvasIconValues, setCanvasIconValues } = React.useContext(CanvasIconContextValues);
  const dragAndDropContainer = React.useRef<HTMLDivElement>(null);

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
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.remove("border-success", "shadow", "bg-white");
    }
  }, [canvasIconValues, setCanvasIconValues]);

  const handleDragOver = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.add("border-success", "shadow", "bg-white");
      dragAndDropContainer.current.classList.remove("bg-transparent");
    }
  }, []);

  const handleDragLeave = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.remove("border-success", "shadow", "bg-white");
      dragAndDropContainer.current.classList.add("bg-transparent");
    }
  }, []);

  return <div className="bg-gray-light py-2 px-0">
    <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
      <h1 className="fs-6 fw-bold mb-0">Icon</h1>
      <input type="color" className="form-control form-control-color" id="iconColorPicker" defaultValue="#0E9842" title="Choose your color"></input>
    </div>
    <div className="px-3 mt-3">
      <div
        className="drag-and-drop-container d-flex justify-content-center align-items-center mb-3 user-select-none p-1 bg-white"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        ref={dragAndDropContainer}
      >
        {canvasIconValues.fileImageURL ?
          <img id="iconSmallImage" className="w-100 h-100 object-fit-contain" src={`${canvasIconValues.fileImageURL}`} alt="Added images" /> :
          <p className="m-0 px-3">Drag and Drop your transparent image here...</p>
        }
      </div>
      <label htmlFor="iconHorizontalRange" className="form-label">Horizontal Position (0 px)</label>
      <input type="range" id="iconHorizontalRange" className="form-range"></input>
      <label htmlFor="iconVerticalRange" className="form-label">Vertical Position (0 px)</label>
      <input type="range" id="iconVerticalRange" className="form-range"></input>
    </div>
  </div >;
};