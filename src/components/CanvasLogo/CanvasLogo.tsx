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
  const { canvasLogoValues, setCanvasLogoValues } =
    React.useContext(CanvasPreviewContextValues);

  const maxStep = 1;

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
        <RangeControl
          id="logoOpacity"
          value={canvasLogoValues.opacity}
          min={0}
          max={100}
          step={10}
          onChange={(e: any) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              opacity: e.target.value,
            })
          }
          labelTitle={"Opacity"}
          labelValue={canvasLogoValues.opacity}
          labelValueType="%"
        />
        <RangeControl
          id="logoHorizontalPosition"
          value={canvasLogoValues.position.x}
          min={1}
          max={11}
          step={maxStep}
          onChange={(e: any) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              position: {
                x: e.target.value,
                y: canvasLogoValues.position.y,
              },
            })
          }
          labelTitle={"Horizontal Position"}
          labelValue={canvasLogoValues.position.x}
        />
        <RangeControl
          id="logoVerticalPosition"
          defaultValue={canvasLogoValues.position.y}
          min={1}
          step={maxStep}
          max={12}
          onChange={(e: any) =>
            setCanvasLogoValues({
              ...canvasLogoValues,
              position: {
                x: canvasLogoValues.position.x,
                y: e.target.value,
              },
            })
          }
          labelTitle={"Vertical Position"}
          labelValue={canvasLogoValues.position.y}
        />
      </div>
    </Fragment>
  );
};
