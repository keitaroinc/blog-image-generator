import React, { Fragment, useContext } from 'react';
import { CanvasPreviewContextValues } from '../../contexts/CanvasPreviewContext';
import { RangeControl } from '../RangeControl/RangeControl';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { Heading } from '../Heading/Heading';
import { ColorPicker } from '../ColorPicker/ColorPicker';

interface CanvasBorderProps {
}

export const CanvasBorder: React.FunctionComponent<CanvasBorderProps> = (props) => {
  const { canvasBorderValues, setCanvasBorderValues } = useContext(CanvasPreviewContextValues)

  const handleBorderWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasBorderValues({ ...canvasBorderValues, width: e.target.value })
  }

  return <Fragment>
    <HeaderComponent>
      <Heading title="Headline" />
      <ColorPicker
        inputDefaultVaule="#000000"
        inputId="canvasBorderColorPicker"
        inputTitle="Choose your color"
        onChange={(e: any) => setCanvasBorderValues({ ...canvasBorderValues, color: e.target.value })}
      />
    </HeaderComponent>
    <div className="list-group-item">
      <label htmlFor="canvasBorderWidth" className="form-label m-3">Border width ({canvasBorderValues.width}rem)</label>
      <RangeControl
        min={0}
        max={10}
        step={1}
        id="canvasBorderWidth"
        value={canvasBorderValues.width}
        onChange={(e: any) => handleBorderWidthChange(e)}
      />
    </div>
  </Fragment>;
};