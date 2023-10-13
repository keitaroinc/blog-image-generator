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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCanvasIconValues({
        ...canvasIconValues,
        fileImage: e.target.files[0],
      });
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setCanvasIconValues({ ...canvasIconValues, fileImage: files[0] });
      if (dragAndDropContainer.current) {
        dragAndDropContainer.current.classList.remove("border-success");
      }
    },
    [canvasIconValues, setCanvasIconValues]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.add("border-success");
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dragAndDropContainer.current) {
      dragAndDropContainer.current.classList.remove("border-success");
    }
  }, []);

  const max = 50;
  const maxStep = 1;

  const handleDeleteImage = () => {
    setCanvasIconValues({
      ...canvasIconValues,
      fileImageURL: null,
      fileImage: null,
    });
  };

  const handleHorizontalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasIconValues({
      ...canvasIconValues,
      align: { ...canvasIconValues.align, horizontal: event.target.value },
    });
  };

  const handleVerticalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasIconValues({
      ...canvasIconValues,
      align: { ...canvasIconValues.align, vertical: event.target.value },
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
      <div
        className="list-group-item d-flex flex-column"
        data-testid="canvasIcon"
      >
        <div
          className="drag-and-drop-container d-flex flex-column flex-fill user-select-none my-2"
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
            <React.Fragment>
              <label
                htmlFor="formFileIcon"
                className="flex-fill form-label d-block text-center mb-0 p-5"
              >
                Click to choose image or drag it here.
              </label>
              <input
                className="form-control d-none"
                type="file"
                id="formFileIcon"
                onChange={(e) => handleFileChange(e)}
              />
            </React.Fragment>
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
              step={maxStep / 2}
              onChange={(e: any) =>
                setCanvasIconValues({
                  ...canvasIconValues,
                  scale: e.target.value,
                })
              }
              labelTitle={"Scale"}
              labelValue={canvasIconValues.scale}
              type="scale"
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
              type="padding"
            />
            <RangeControl
              id="iconHorizontalRange"
              title="Icon Horizontal Position"
              value={canvasIconValues.position.x}
              align={canvasIconValues.align.horizontal}
              min={0}
              max={max}
              step={maxStep}
              onHorizontalAlignChange={(e: any) =>
                handleHorizontalAlignChange(e)
              }
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
              type="horizontal-position"
            />
            <RangeControl
              id="iconVerticalRange"
              title="Icon Vertical Position"
              className="form-range"
              min={0}
              max={max}
              step={1}
              value={canvasIconValues.position.y}
              align={canvasIconValues.align.vertical}
              onVerticalAlignChange={(e: any) => handleVerticalAlignChange(e)}
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
              type="vertical-position"
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
