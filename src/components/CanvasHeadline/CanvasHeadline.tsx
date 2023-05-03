import * as React from 'react';
import { CanvasHeadlineContextValues } from '../../contexts/HeadlineContext';

interface CanvasHeadlineProps {
}

export const CanvasHeadline: React.FunctionComponent<CanvasHeadlineProps> = (props) => {
  const { canvasHeadlineValues, setCanvasHeadlineValues } = React.useContext(CanvasHeadlineContextValues);

  return <div className="bg-gray-light py-2 px-0">
    <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
      <p className="fs-6 fw-bold mb-0">Headline</p>
      <input type="color" className="" />
    </div>
    <div className="px-3 mt-3">
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={canvasHeadlineValues.content}
          onChange={(e) => setCanvasHeadlineValues({ ...canvasHeadlineValues, content: e.target.value })}></textarea>
        <label htmlFor="floatingTextarea">Enter headline text here.</label>
      </div>
      <label htmlFor='horizontalPosition' className="form-label">Horizontal Position (0 px)</label>
      <input id='horizontalPosition' type="range" className="form-range custom-range"></input>
      <label htmlFor='verticalPosition' className="form-label">Vertical Position (0 px)</label>
      <input id='verticalPosition' type="range" className="form-range custom-range"></input>
    </div>
  </div >;
};