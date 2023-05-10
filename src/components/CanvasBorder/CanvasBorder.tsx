import React, { Fragment, useContext } from 'react';
import { CanvasPreviewContextValues } from '../../contexts/CanvasPreviewContext';

interface CanvasBorderProps {
}

export const CanvasBorder: React.FunctionComponent<CanvasBorderProps> = (props) => {
  const { canvasBorderValues, setCanvasBorderValues } = useContext(CanvasPreviewContextValues)

  const handleBorderWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasBorderValues({ ...canvasBorderValues, width: e.target.value })
  }

  return <Fragment>
    <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
      <h1 className="h6 mb-0">Border</h1>
      <input
        type="color"
        className="form-control form-control-color"
        id="headlineColorPicker"
        defaultValue="#000"
        title="Choose your color"
        onChange={(e) => setCanvasBorderValues({ ...canvasBorderValues, color: e.target.value })}>
      </input>
    </div>
    <div className="list-group-item">
      <label htmlFor="headlineHorizontalRange" className="form-label m-3">Border width ({canvasBorderValues.width}rem)</label>
      <input
        type="range"
        min={0}
        max={6}
        step={1}
        id="headlineHorizontalRange"
        value={canvasBorderValues.width}
        onChange={(e) => handleBorderWidthChange(e)}
        className="form-range"></input>
    </div>
  </Fragment>;
};