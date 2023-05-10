import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";

interface CanvasBackgroundProps {}

export const CanvasBackground: React.FunctionComponent<
  CanvasBackgroundProps
> = (props) => {
  const { canvasBackgroundValues, setCanvasBackgroundValues } =
    React.useContext(CanvasPreviewContextValues);
  const dragAndDropContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let fileReader: FileReader,
      isCancel: boolean = false;
    if (canvasBackgroundValues.fileImage) {
      let file = canvasBackgroundValues.fileImage;
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (
          (!canvasBackgroundValues.fileImageURL ||
            canvasBackgroundValues.fileImageURL !== fileReader.result) &&
          e.target &&
          !isCancel
        ) {
          setCanvasBackgroundValues({
            ...canvasBackgroundValues,
            fileImageURL: e.target.result,
          });
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [canvasBackgroundValues, setCanvasBackgroundValues]);

  const handleDrop = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setCanvasBackgroundValues({
        ...canvasBackgroundValues,
        fileImage: files[0],
      });
      if (dragAndDropContainer.current) {
        dragAndDropContainer.current.classList.remove(
          "border-success",
          "shadow",
          "bg-white"
        );
      }
    },
    [canvasBackgroundValues, setCanvasBackgroundValues]
  );

  const handleDragOver = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (dragAndDropContainer.current) {
        dragAndDropContainer.current.classList.add(
          "border-success",
          "shadow",
          "bg-white"
        );
        dragAndDropContainer.current.classList.remove("bg-transparent");
      }
    },
    []
  );

  const handleDragLeave = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (dragAndDropContainer.current) {
        dragAndDropContainer.current.classList.remove(
          "border-success",
          "shadow",
          "bg-white"
        );
        dragAndDropContainer.current.classList.add("bg-transparent");
      }
    },
    []
  );

  const handleHorizontalPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasBackgroundValues({
      ...canvasBackgroundValues,
      position: { ...canvasBackgroundValues.position, x: event.target.value },
    });
  };

  const handleVerticalPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasBackgroundValues({
      ...canvasBackgroundValues,
      position: { ...canvasBackgroundValues.position, y: event.target.value },
    });
  };

  const handleBackgroundImageScale = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasBackgroundValues({
      ...canvasBackgroundValues,
      size: event.target.value,
    });
  };

  const handleBackgroundBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasBackgroundValues({
      ...canvasBackgroundValues,
      blur: event.target.value,
    });
  };

  return (
    <Fragment>
      <HeaderComponent
        title="Background"
        inputDefaultVaule={canvasBackgroundValues.color}
        inputId="backgroundColorPicker"
        inputTitle="Choose your color"
        onChange={(e: any) =>
          setCanvasBackgroundValues({
            ...canvasBackgroundValues,
            color: e.target.value,
          })
        }
      />
      <div className="list-group-item">
        <div
          className="drag-and-drop-container d-flex justify-content-center align-items-center mb-3 user-select-none my-2 p-1 bg-white"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          ref={dragAndDropContainer}
        >
          {canvasBackgroundValues.fileImageURL ? (
            <img
              id="backgroundSmallImage"
              className="w-100 h-100 object-fit-contain"
              src={`${canvasBackgroundValues.fileImageURL}`}
              alt="Added images"
            />
          ) : (
            <p className="m-0 px-3">Drag and Drop Image Here</p>
          )}
        </div>
        {canvasBackgroundValues.fileImageURL ? (
          <Fragment>
            <label
              htmlFor="backgroundHorizontalRange"
              className="form-label m-3"
            >
              Horizontal Position ({canvasBackgroundValues.position.x}%)
            </label>
            <input
              type="range"
              id="backgroundHorizontalRange"
              min={-100}
              max={200}
              step={1}
              value={canvasBackgroundValues.position.x}
              onChange={(e) => handleHorizontalPositionChange(e)}
              className="form-range"
            ></input>
            <label htmlFor="backgroundVerticalRange" className="form-label m-3">
              Vertical Position ({canvasBackgroundValues.position.y}%)
            </label>
            <input
              type="range"
              id="backgroundVerticalRange"
              min={-100}
              max={200}
              step={1}
              value={canvasBackgroundValues.position.y}
              onChange={(e) => handleVerticalPositionChange(e)}
              className="form-range"
            ></input>
            <label htmlFor="backgroundScaleRange" className="form-label m-3">
              Scale ({canvasBackgroundValues.size}%)
            </label>
            <input
              type="range"
              min={0}
              max={1000}
              step={1}
              value={canvasBackgroundValues.size}
              onChange={(e) => handleBackgroundImageScale(e)}
              id="backgroundScaleRange"
              className="form-range"
            ></input>
            <label htmlFor="backgroundBlurRange" className="form-label m-3">
              Blur ({canvasBackgroundValues.blur}px)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={canvasBackgroundValues.blur}
              onChange={(e) => handleBackgroundBlur(e)}
              id="backgroundBlurRange"
              className="form-range"
            ></input>
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};
