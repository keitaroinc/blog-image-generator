import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasHeadlineProps {}

export const CanvasHeadline: React.FunctionComponent<CanvasHeadlineProps> = (
  props
) => {
  const { canvasHeadlineValues, setCanvasHeadlineValues } = React.useContext(
    CanvasPreviewContextValues
  );

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
  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasHeadlineValues({
      ...canvasHeadlineValues,
      size: event.target.value,
    });
  };

  const max = 12;
  const maxStep = 1;

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Headline" />
        <ColorPicker
          inputDefaultVaule="#000"
          inputId="headlineColorPicker"
          inputTitle="Choose your color"
          onChange={(e: any) =>
            setCanvasHeadlineValues({
              ...canvasHeadlineValues,
              color: e.target.value,
            })
          }
        />
      </HeaderComponent>
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
        <RangeControl
          min={3}
          max={12}
          step={1}
          id="headlineSizeRange"
          value={canvasHeadlineValues.size}
          onChange={(e: any) => handleFontSizeChange(e)}
          labelTitle={"Size"}
          labelValue={canvasHeadlineValues.size}
          labelValueType=""
        />
        <RangeControl
          min={2}
          max={max}
          step={maxStep}
          id="headlineHorizontalRange"
          value={canvasHeadlineValues.position.x}
          onChange={(e: any) => handleHorizontalPositionChange(e)}
          labelTitle={"Horizontal Position"}
          labelValue={canvasHeadlineValues.position.x}
        />
        <RangeControl
          min={2}
          max={max}
          step={maxStep}
          id="headlineVerticalRange"
          value={canvasHeadlineValues.position.y}
          onChange={(e: any) => handleVerticalPositionChange(e)}
          labelTitle={"Vertical Position"}
          labelValue={canvasHeadlineValues.position.y}
        />
      </div>
    </Fragment>
  );
};
