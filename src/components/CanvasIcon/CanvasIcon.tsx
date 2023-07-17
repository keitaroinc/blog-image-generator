import React, {
  Fragment,
  useRef,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasIconProps {}

export const CanvasIcon: React.FunctionComponent<CanvasIconProps> = (props) => {
  const { canvasIconValues, setCanvasIconValues } = useContext(
    CanvasPreviewContextValues
  );
  const dragAndDropContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleDrop = useCallback(
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

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.add(
        "border-success",
        "shadow",
        "bg-white"
      );
      dragAndDropContainer.current.classList.remove("bg-transparent");
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.remove(
        "border-success",
        "shadow",
        "bg-white"
      );
      dragAndDropContainer.current.classList.add("bg-transparent");
    }
  }, []);

  const max = 24;
  const maxStep = 1;

  const handleDeleteImage = () => {
    setCanvasIconValues({
      ...canvasIconValues,
      fileImageURL: null,
      fileImage: null,
    });
  };

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Icon" />
        <ColorPicker
          inputValue={canvasIconValues.color}
          inputId="iconColorPicker"
          inputTitle="Icon Color"
          onChange={(e: any) =>
            setCanvasIconValues({ ...canvasIconValues, color: e.target.value })
          }
        />
      </HeaderComponent>
      <div className="list-group-item" data-testid="canvasIcon">
        <div
          className="drag-and-drop-container d-flex justify-content-center align-items-center mb-3 user-select-none mt-2 p-1 bg-white"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          ref={dragAndDropContainer}
          style={{ backgroundColor: canvasIconValues.color }}
        >
          {canvasIconValues.fileImageURL ? (
            <div className="alert alert-dismissible">
              <img
                id="iconSmallImage"
                className="img-fluid"
                src={`${canvasIconValues.fileImageURL}`}
                alt="Added images"
              />
              <button
                type="button"
                onClick={() => handleDeleteImage()}
                className="btn-close justify-self-end"
                aria-label="Close"
              />
            </div>
          ) : (
            <p className="m-0 px-3">Drag and Drop Image Here</p>
          )}
        </div>
        {canvasIconValues.fileImageURL && (
          <Fragment>
            <RangeControl
              id="iconScaleRange"
              title="Icon Scale"
              defaultValue={canvasIconValues.scale}
              min={1}
              max={max}
              step={1}
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  scale: e.target.value,
                })
              }
              labelTitle={"Scale"}
              labelValue={canvasIconValues.scale}
            />
            <RangeControl
              id="iconPaddingRange"
              title="Icon Padding"
              defaultValue={canvasIconValues.padding}
              min={0}
              max={max / 2}
              step={maxStep}
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  padding: e.target.value,
                })
              }
              labelTitle={"Padding"}
              labelValue={canvasIconValues.padding}
            />
            <RangeControl
              id="iconHorizontalRange"
              title="Icon Horizontal Position"
              defaultValue={canvasIconValues.position.x}
              min={1}
              max={max}
              step={maxStep}
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  position: {
                    x: e.target.value,
                    y: canvasIconValues.position.y,
                  },
                })
              }
              labelTitle={"Horizontal Position"}
              labelValue={canvasIconValues.position.x}
            />
            <RangeControl
              id="iconVerticalRange"
              title="Icon Vertical Position"
              className="form-range"
              min={1}
              max={max}
              step={1}
              defaultValue={canvasIconValues.position.y}
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  position: {
                    x: canvasIconValues.position.x,
                    y: e.target.value,
                  },
                })
              }
              labelTitle={"Vertical Position"}
              labelValue={canvasIconValues.position.y}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
