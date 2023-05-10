import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasHeadlineProps {}

export const CanvasHeadline: React.FunctionComponent<CanvasHeadlineProps> = (
  props
) => {
  const { canvasHeadlineValues, setCanvasHeadlineValues, canvasRefs } =
    React.useContext(CanvasPreviewContextValues);

  const handleHorizontalPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasHeadlineValues({
      ...canvasHeadlineValues,
      position: { ...canvasHeadlineValues.position, x: event.target.value },
    });
  };

  const handleVerticalPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasHeadlineValues({
      ...canvasHeadlineValues,
      position: { ...canvasHeadlineValues.position, y: event.target.value },
    });
  };

  return (
    <Fragment>
      <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
        <h1 className="h6 mb-0">Headline</h1>
        <input
          type="color"
          className="form-control form-control-color"
          id="headlineColorPicker"
          defaultValue="#000"
          title="Choose your color"
          onChange={(e) =>
            setCanvasHeadlineValues({
              ...canvasHeadlineValues,
              color: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="list-group-item">
        <div className="form-floating mb-3 mt-2">
          <textarea
            className="form-control h-100"
            placeholder="Leave a comment here"
            id="headlineTextarea"
            rows={3}
            value={canvasHeadlineValues.content}
            onChange={(e) =>
              setCanvasHeadlineValues({
                ...canvasHeadlineValues,
                content: e.target.value,
              })
            }
          ></textarea>
          <label htmlFor="headlineTextarea">Enter headline text here.</label>
        </div>
        <label htmlFor="headlineHorizontalRange" className="form-label m-3">
          Horizontal Position ({canvasHeadlineValues.position.x}px)
        </label>
        <RangeControl
          min="0"
          max={canvasRefs.canvasRefWidth - canvasRefs.headlineRefWidth}
          step="1"
          id="headlineHorizontalRange"
          value={canvasHeadlineValues.position.x}
          onChange={(e: any) => handleHorizontalPositionChange(e)}
        />
        <label htmlFor="headlineVerticalRange" className="form-label m-3">
          Vertical Position ({canvasHeadlineValues.position.y}px)
        </label>
        <RangeControl
          min="0"
          max={canvasRefs.canvasRefHeight - canvasRefs.headlineRefHeight}
          step="1"
          id="headlineVerticalRange"
          value={canvasHeadlineValues.position.y}
          onChange={(e: any) => handleVerticalPositionChange(e)}
        />
      </div>
    </Fragment>
  );
};
