import React, {Fragment} from 'react';
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

  return <Fragment>
    <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
      <h1 className="h6 mb-0">Headline</h1>
      <input type="color" className="form-control form-control-color" id="headlineColorPicker" defaultValue="#000" title="Choose your color" onChange={(e) => setCanvasHeadlineValues({ ...canvasHeadlineValues, color: e.target.value })}></input>
    </div>
    <div className="list-group-item bg-gray-light">
      <div className="form-floating mb-3 mt-2">
        <textarea
          className="form-control h-100"
          placeholder="Leave a comment here"
          id="headlineTextarea"
          rows={3}
          value={canvasHeadlineValues.content}
          onChange={(e) => setCanvasHeadlineValues({ ...canvasHeadlineValues, content: e.target.value })}></textarea>
        <label htmlFor="headlineTextarea">Enter headline text here.</label>
      </div>
      <label htmlFor="headlineHorizontalRange" className="form-label m-3">Horizontal Position (0 px)</label>
      <input
        type="range"
        min={0}
        max={canvasRefs.canvasRefWidth - canvasRefs.headlineRefWidth}
        step={1}
        id="headlineHorizontalRange"
        value={canvasHeadlineValues.position.x}
        onChange={(e) => handleHorizontalPositionChange(e)}
        className="form-range"></input>
      <label htmlFor="headlineVerticalRange" className="form-label m-3">Vertical Position (0 px)</label>
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
  </Fragment>
};
