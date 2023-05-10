import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import keitaroLogoFullColor from "../../assets/svg/keitaro-logo-full-color.svg";
import keitaroLogoBlack from "../../assets/svg/keitaro-logo-black.svg";
import keitaroLogoGrayscale from "../../assets/svg/keitaro-logo-grayscale.svg";
import keitaroLogoWhite from "../../assets/svg/keitaro-logo-white.svg";
import { Heading } from "../Heading/Heading";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasLogoProps {}

const logoOptions = [
  { src: keitaroLogoFullColor, label: "Full Color" },
  { src: keitaroLogoGrayscale, label: "Grayscale" },
  { src: keitaroLogoBlack, label: "Black" },
  { src: keitaroLogoWhite, label: "White" },
];

export const CanvasLogo: React.FunctionComponent<CanvasLogoProps> = (props) => {
  const { canvasLogoValues, setCanvasLogoValues, canvasRefs } =
    React.useContext(CanvasPreviewContextValues);

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Keitaro Logo" className="py-2" />
      </HeaderComponent>
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
          Horizontal Position ({canvasLogoValues.position.x}px)
        </label>
        <RangeControl
          id="logoHorizontalPosition"
          value={canvasLogoValues.position.x}
          min={0}
          max={canvasRefs.canvasRefWidth - (canvasRefs.logoRefWidth + 200)}
          step={1}
          onChange={(e: any) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              position: {
                x: e.target.value,
                y: canvasLogoValues.position.y,
              },
            })
          }
        />
        <label htmlFor="logoVerticalPosition" className="form-label m-3">
          Vertical Position ({canvasLogoValues.position.y}px)
        </label>
        <RangeControl
          id="logoVerticalPosition"
          defaultValue={canvasLogoValues.position.y}
          min={0}
          step={1}
          max={canvasRefs.canvasRefHeight - 60 - canvasRefs.logoRefHeight}
          onChange={(e: any) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              position: {
                x: canvasLogoValues.position.x,
                y: e.target.value,
              },
            })
          }
        />
      </div>
    </Fragment>
  );
};
