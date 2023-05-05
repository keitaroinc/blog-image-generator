import * as React from 'react';
import { CanvasPreviewContextValues } from '../../contexts/CanvasPreviewContext';

interface CanvasHeadlineProps {
}

export const CanvasHeadline: React.FunctionComponent<CanvasHeadlineProps> = (props) => {
  const { canvasHeadlineValues, setCanvasHeadlineValues, canvasRefs } = React.useContext(CanvasPreviewContextValues);

  const handleHorizontalPositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasHeadlineValues({ ...canvasHeadlineValues, position: { ...canvasHeadlineValues.position, x: event.target.value } })
  };

  const handleVerticalPositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasHeadlineValues({ ...canvasHeadlineValues, position: { ...canvasHeadlineValues.position, y: event.target.value }, });
  };

  return <div className="bg-gray-light py-2 px-0">
    <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
      <h1 className="fs-6 fw-bold mb-0">Headline</h1>
      <input
        type="color"
        className="form-control form-control-color"
        id="headlineColorPicker"
        defaultValue="#000000"
        title="Choose your color"
        onChange={(e) => setCanvasHeadlineValues({ ...canvasHeadlineValues, color: e.target.value })}></input>
    </div>
    <div className="px-3 mt-3">
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"

          id="headlineTextarea"
          value={canvasHeadlineValues.content}
          onChange={(e) => setCanvasHeadlineValues({ ...canvasHeadlineValues, content: e.target.value })}></textarea>
        <label htmlFor="headlineTextarea">Enter headline text here.</label>
      </div>
      <label htmlFor="headlineHorizontalRange" className="form-label">Horizontal Position (0 px)</label>
      <input
        type="range"
        min={0}
        max={canvasRefs.canvasRefWidth - canvasRefs.headlineRefWidth}
        step={1}
        id="headlineHorizontalRange"
        value={canvasHeadlineValues.position.x}
        onChange={(e) => handleHorizontalPositionChange(e)}
        className="form-range"></input>
      <label htmlFor="headlineVerticalRange" className="form-label">Vertical Position (0 px)</label>
      <input
        type="range"
        min={0}
        max={canvasRefs.canvasRefHeight - canvasRefs.headlineRefHeight}
        step={1}
        id="headlineVerticalRange"
        value={canvasHeadlineValues.position.y}
        onChange={(e) => handleVerticalPositionChange(e)}
        className="form-range"></input>
    </div>
  </div >;
};