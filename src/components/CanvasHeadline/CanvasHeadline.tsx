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

  const handleHorizontalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasHeadlineValues({
      ...canvasHeadlineValues,
      align: { ...canvasHeadlineValues.align, horizontal: event.target.value },
    });
  };

  const handleVerticalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasHeadlineValues({
      ...canvasHeadlineValues,
      align: { ...canvasHeadlineValues.align, vertical: event.target.value },
    });
  };

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

  const max = 24;
  const maxStep = 1;

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Headline" />
        <ColorPicker
          inputValue={canvasHeadlineValues.color}
          inputId="headlineColorPicker"
          inputTitle="Headline Color"
          onChange={(e: any) =>
            setCanvasHeadlineValues({
              ...canvasHeadlineValues,
              color: e.target.value,
            })
          }
        />
      </HeaderComponent>
      <div className="list-group-item" data-testid="canvasHeadline">
        <div className="form-floating mb-3 mt-2">
          <textarea
            className="form-control h-100"
            id="headlineTextarea"
            data-testid="headlineTextarea"
            placeholder="Enter headline text here"
            rows={3}
            value={canvasHeadlineValues.content}
            onChange={(e) =>
              setCanvasHeadlineValues({
                ...canvasHeadlineValues,
                content: e.target.value,
              })
            }
          ></textarea>
          <label htmlFor="headlineTextarea">Headline text</label>
        </div>
        <RangeControl
          min={3}
          max={12}
          step={0.5}
          id="headlineSizeRange"
          title="Headline Size"
          value={canvasHeadlineValues.size}
          onChange={(e: any) => handleFontSizeChange(e)}
          labelTitle={"Size"}
          labelValue={canvasHeadlineValues.size}
          labelValueType=""
          type="size"
        />
        <RangeControl
          min={1}
          max={max}
          step={maxStep}
          title="Headline Horizontal Position"
          id="headlineHorizontalRange"
          value={canvasHeadlineValues.position.x}
          align={canvasHeadlineValues.align.horizontal}
          onChange={(e: any) => handleHorizontalPositionChange(e)}
          onHorizontalAlignChange={(e: any) => handleHorizontalAlignChange(e)}
          labelTitle={"Horizontal Position"}
          labelValue={canvasHeadlineValues.position.x}
          type="horizontal-position"
        />
        <RangeControl
          min={1}
          max={max}
          step={maxStep}
          title="Headline Vertical Position"
          id="headlineVerticalRange"
          value={canvasHeadlineValues.position.y}
          align={canvasHeadlineValues.align.vertical}
          onChange={(e: any) => handleVerticalPositionChange(e)}
          onVerticalAlignChange={(e: any) => handleVerticalAlignChange(e)}
          labelTitle={"Vertical Position"}
          labelValue={canvasHeadlineValues.position.y}
          type="vertical-position"
        />
      </div>
    </Fragment>
  );
};
