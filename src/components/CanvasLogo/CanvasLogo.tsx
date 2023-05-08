import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import keitaroLogoFullColor from "../../assets/svg/keitaro-logo-full-color.svg";
import keitaroLogoBlack from "../../assets/svg/keitaro-logo-black.svg";
import keitaroLogoGrayscale from "../../assets/svg/keitaro-logo-grayscale.svg";
import keitaroLogoWhite from "../../assets/svg/keitaro-logo-white.svg";

interface CanvasLogoProps { }

const logoOptions = [
  { src: keitaroLogoFullColor, label: "Full Color" },
  { src: keitaroLogoGrayscale, label: "Grayscale" },
  { src: keitaroLogoBlack, label: "Black" },
  { src: keitaroLogoWhite, label: "White" },
];

export const CanvasLogo: React.FunctionComponent<CanvasLogoProps> = (props) => {
  const { canvasLogoValues, setCanvasLogoValues, canvasRefs } = React.useContext(CanvasPreviewContextValues);

  return (
    <Fragment>
      <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
        <h1 className="h6 my-2">Keitaro Logo</h1>
      </div>
      <div className="list-group-item">
        <div className="form-floating my-2">
          <select
            title="CanvasLogoOptions"
            onChange={(e) =>
              setCanvasLogoValues({ ...canvasLogoValues, src: e.target.value })
            }
            className="form-select"
            aria-label="Logo Type"
          >
            {logoOptions.map((option) => (
              <option key={option.src} value={option.src}>
                {option.label}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Logo Type</label>
        </div>
        <label htmlFor="logoHorizontalPosition" className="form-label m-3">
          Horizontal Position (0 px)
        </label>
        <input
          id="logoHorizontalPosition"
          defaultValue={canvasLogoValues.position.x}
          type="range"
          className="form-range mb-2"
          min={0}
          max={canvasRefs.canvasRefHeight - canvasRefs.logoRefHeight}
          onChange={(e) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              position: {
                x: e.target.value,
                y: canvasLogoValues.position.y
              }
            })
          }
        />
        <label htmlFor="logoVerticalPosition" className="form-label m-3">
          Vertical Position (0 px)
        </label>
        <input
          id="logoVerticalPosition"
          defaultValue={canvasLogoValues.position.y}
          type="range"
          className="form-range"
          min={0}
          max={canvasRefs.canvasRefWidth - canvasRefs.logoRefWidth}
          onChange={(e) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              position: {
                x: canvasLogoValues.position.x,
                y: e.target.value,
              }
            })
          }
        />
      </div>
    </Fragment>
  );
};
