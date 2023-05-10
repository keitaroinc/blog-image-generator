import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasIconProps {}

export const CanvasIcon: React.FunctionComponent<CanvasIconProps> = (props) => {
  const { canvasIconValues, setCanvasIconValues } = React.useContext(
    CanvasPreviewContextValues
  );
  const dragAndDropContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let fileReader: FileReader,
      isCancel: boolean = false;
    if (canvasIconValues.fileImage) {
      let file = canvasIconValues.fileImage;
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (
          (!canvasIconValues.fileImageURL ||
            canvasIconValues.fileImageURL !== fileReader.result) &&
          e.target &&
          !isCancel
        ) {
          setCanvasIconValues({
            ...canvasIconValues,
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
  }, [canvasIconValues, setCanvasIconValues]);

  const handleDrop = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setCanvasIconValues({ ...canvasIconValues, fileImage: files[0] });
      if (dragAndDropContainer.current) {
        dragAndDropContainer.current.classList.remove(
          "border-success",
          "shadow",
          "bg-white"
        );
      }
    },
    [canvasIconValues, setCanvasIconValues]
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

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Icon" />
        <ColorPicker
          inputDefaultVaule={"#DEE2E6"}
          inputId="iconColorPicker"
          inputTitle="Choose your color"
          onChange={(e: any) =>
            setCanvasIconValues({ ...canvasIconValues, color: e.target.value })
          }
        />
      </HeaderComponent>
      <div className="list-group-item">
        <div
          className="drag-and-drop-container d-flex justify-content-center align-items-center mb-3 user-select-none mt-2 p-1 bg-white"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          ref={dragAndDropContainer}
        >
          {canvasIconValues.fileImageURL ? (
            <img
              id="iconSmallImage"
              className="w-100 h-100 object-fit-contain"
              src={`${canvasIconValues.fileImageURL}`}
              alt="Added images"
            />
          ) : (
            <p className="m-0 px-3">Drag and Drop Image Here</p>
          )}
        </div>
        {canvasIconValues.fileImageURL && (
          <Fragment>
            <label htmlFor="iconHorizontalRange" className="form-label m-3">
              Horizontal Position ({canvasIconValues.position.x}px)
            </label>
            <RangeControl
              id="iconHorizontalRange"
              style={{ transform: "rotate(180deg" }}
              value={canvasIconValues.position.x}
              max="100"
              step="1"
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  position: {
                    x: e.target.value,
                    y: canvasIconValues.position.y,
                  },
                })
              }
            />
            <label htmlFor="iconVerticalRange" className="form-label m-3">
              Vertical Position ({canvasIconValues.position.y}px)
            </label>
            <RangeControl
              id="iconVerticalRange"
              value={canvasIconValues.position.y}
              max="100"
              step="1"
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  position: {
                    x: canvasIconValues.position.x,
                    y: e.target.value,
                  },
                })
              }
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
