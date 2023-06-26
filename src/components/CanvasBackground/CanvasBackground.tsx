import React, { Fragment, useCallback, useEffect } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasBackgroundProps {}

export const CanvasBackground: React.FunctionComponent<
  CanvasBackgroundProps
> = (props) => {
  const { canvasBackgroundValues, setCanvasBackgroundValues } =
    React.useContext(CanvasPreviewContextValues);
  const dragAndDropContainer = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCanvasBackgroundValues({
        ...canvasBackgroundValues,
        fileImage: e.target.files[0],
      });
    }
  };

  const handleDrop = useCallback(
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

  const handleDeleteImage = () => {
    setCanvasBackgroundValues({
      ...canvasBackgroundValues,
      fileImageURL: null,
      fileImage: null,
    });
  };
  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Background" />
        <ColorPicker
          inputValue={canvasBackgroundValues.color}
          inputId="backgroundColorPicker"
          inputTitle="Background Color"
          onChange={(e: any) =>
            setCanvasBackgroundValues({
              ...canvasBackgroundValues,
              color: e.target.value,
            })
          }
        />
      </HeaderComponent>
      <div className="list-group-item" data-testid="canvasBackground">
        <div
          className="drag-and-drop-container d-flex justify-content-center align-items-center mb-3 user-select-none my-2 p-1 bg-white position-relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          ref={dragAndDropContainer}
        >
          <div className="position-absolute w-100 h-100 opacity-0">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input
              className="form-control w-100 h-100"
              type="file"
              id="formFile"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          {canvasBackgroundValues.fileImageURL ? (
            <div className="alert alert-dismissible">
              <img
                id="iconSmallImage"
                className="img-fluid"
                src={`${canvasBackgroundValues.fileImageURL}`}
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
            <p className="m-0 px-3">Click to choose image or drag it here.</p>
          )}
        </div>
        {canvasBackgroundValues.fileImageURL ? (
          <Fragment>
            <RangeControl
              id="backgroundHorizontalRange"
              title="Background Horizontal Position"
              min={-100}
              max={200}
              step="1"
              value={canvasBackgroundValues.position.x}
              onChange={(e: any) => handleHorizontalPositionChange(e)}
              labelTitle={"Horizontal Position"}
              labelValue={canvasBackgroundValues.position.x}
              labelValueType="%"
              type="horizontal-position"
            />
            <RangeControl
              id="backgroundVerticalRange"
              title="Background Vertical Position"
              min={-100}
              max={200}
              step="1"
              value={canvasBackgroundValues.position.y}
              onChange={(e: any) => handleVerticalPositionChange(e)}
              labelTitle={"Vertical Position"}
              labelValue={canvasBackgroundValues.position.y}
              labelValueType="%"
              type="vertical-position"
            />
            <RangeControl
              id="backgroundScaleRange"
              title="Background Scale"
              min={0}
              max={1000}
              step="1"
              value={canvasBackgroundValues.size}
              onChange={(e: any) => handleBackgroundImageScale(e)}
              labelTitle={"Scale"}
              labelValue={canvasBackgroundValues.size}
              labelValueType="%"
              type="scale"
            />
            <RangeControl
              id="backgroundBlurRange"
              title="Background Blur"
              min={0}
              max={100}
              step="1"
              value={canvasBackgroundValues.blur}
              onChange={(e: any) => handleBackgroundBlur(e)}
              labelTitle="Blur"
              labelValue={canvasBackgroundValues.blur}
              labelValueType="px"
              type="blur"
            />
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};
