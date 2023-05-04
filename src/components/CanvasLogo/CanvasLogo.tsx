import * as React from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import keitaroLogoFullColor from "../../assets/svg/keitaro-logo-full-color.svg";
import keitaroLogoBlack from "../../assets/svg/keitaro-logo-black.svg";
import keitaroLogoGrayscale from "../../assets/svg/keitaro-logo-grayscale.svg";
import keitaroLogoWhite from "../../assets/svg/keitaro-logo-white.svg";

interface CanvasLogoProps { }

const logoOptions = [
  { src: keitaroLogoFullColor, label: "Full Color" },
  { src: keitaroLogoBlack, label: "Black" },
  { src: keitaroLogoGrayscale, label: "Grayscale" },
  { src: keitaroLogoWhite, label: "White" },
];

export const CanvasLogo: React.FunctionComponent<CanvasLogoProps> = (props) => {
  const { canvasLogoValues, setCanvasLogoValues } = React.useContext(CanvasPreviewContextValues);

  return (
    <div className="bg-gray-light py-2 px-0">
      <div className=" bg-gray-medium d-flex justify-content-between align-items-center py-3 px-3">
        <h1 className="fs-6 fw-bold mb-0">Keitaro Logo</h1>
      </div>
      <div className="px-3 mt-3">
        <select
          title="CanvasLogoOptions"
          onChange={(e) =>
            setCanvasLogoValues({ ...canvasLogoValues, src: e.target.value })
          }
          className="form-select"
        >
          {logoOptions.map((option) => (
            <option key={option.src} value={option.src}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="px-3 my-4">
        <label htmlFor="logoHorizontalPosition" className="form-label">
          Horizontal Position (0 px)
        </label>
        <input
          id="logoHorizontalPosition"
          defaultValue={canvasLogoValues.position.x}
          type="range"
          className="form-range mb-2"
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
        <label htmlFor="logoVerticalPosition" className="form-label">
          Vertical Position (0 px)
        </label>
        <input
          id="logoVerticalPosition"
          defaultValue={canvasLogoValues.position.y}
          type="range"
          className="form-range"
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
    </div>
  );
};
