import React, { Fragment, useContext } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { RangeControl } from "../RangeControl/RangeControl";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { ColorPicker } from "../ColorPicker/ColorPicker";

// interface CanvasBorderProps {}

export const CanvasBorder: React.FunctionComponent = () => {
  const { canvasBorderValues, setCanvasBorderValues } = useContext(
    CanvasPreviewContextValues,
  );

  const handleBorderWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasBorderValues({ ...canvasBorderValues, width: e.target.value });
  };

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Border" />
        <ColorPicker
          inputValue={canvasBorderValues.color}
          inputId="canvasBorderColorPicker"
          inputTitle="Border Color"
          onChange={(e: any) =>
            setCanvasBorderValues({
              ...canvasBorderValues,
              color: e.target.value,
            })
          }
        />
      </HeaderComponent>
      <div className="list-group-item" data-testid="canvasBorder">
        <RangeControl
          id="canvasBorderWidth"
          title="Border Width"
          min={0}
          max={6}
          step={1}
          value={canvasBorderValues.width}
          onChange={(e: any) => handleBorderWidthChange(e)}
          labelTitle={"Border Width"}
          labelValue={canvasBorderValues.width}
          type="width"
        />
      </div>
    </Fragment>
  );
};
