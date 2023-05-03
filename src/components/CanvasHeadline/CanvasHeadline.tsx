import * as React from 'react';
import { CanvasHeadlineContextValues } from '../../contexts/HeadlineContext';

interface CanvasHeadlineProps {
}

export const CanvasHeadline: React.FunctionComponent<CanvasHeadlineProps> = (props) => {
  const { canvasHeadlineValues, setCanvasHeadlineValues } = React.useContext(CanvasHeadlineContextValues);

  return <div className="bg-gray-light py-2 px-0">
    <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
      <h1 className="fs-6 fw-bold mb-0">Headline</h1>
      <input type="color" className="form-control form-control-color" id="HeadlineColorPicker" defaultValue="#0E9842" title="Choose your color"></input>
    </div>
    <div className="px-3 mt-3">
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="HeadlineTextarea"
          value={canvasHeadlineValues.content}
          onChange={(e) => setCanvasHeadlineValues({ ...canvasHeadlineValues, content: e.target.value })}></textarea>
        <label htmlFor="HeadlineTextarea">Enter headline text here.</label>
      </div>
      <label htmlFor="HeadlineHorizontalRange" className="form-label">Horizontal Position (0 px)</label>
      <input type="range" id="HeadlineHorizontalRange" className="form-range custom-range"></input>
      <label htmlFor="HeadlineVerticalRange" className="form-label">Vertical Position (0 px)</label>
      <input type="range" id="HeadlineVerticalRange" className="form-range custom-range"></input>
    </div>
  </div >;
};