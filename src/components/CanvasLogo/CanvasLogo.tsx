import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { Heading } from "../Heading/Heading";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { RangeControl } from "../RangeControl/RangeControl";
import { ColorPicker } from "../ColorPicker/ColorPicker";

interface CanvasLogoProps {}

const logoOptions = [
  { src: "KeitaroFullColorLogo", label: "Full Color" },
  { src: "KeitaroGrayscaleLogo", label: "Grayscale" },
  { src: "KeitaroBlackLogo", label: "Black" },
  { src: "KeitaroWhiteLogo", label: "White" },
];

export const CanvasLogo: React.FunctionComponent<CanvasLogoProps> = (props) => {
  const { canvasLogoValues, setCanvasLogoValues } = React.useContext(
    CanvasPreviewContextValues
  );

  const max = 24;
  const maxStep = 1;

  const handleHorizontalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasLogoValues({
      ...canvasLogoValues,
      align: { ...canvasLogoValues.align, horizontal: event.target.value },
    });
  };

  const handleVerticalAlignChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCanvasLogoValues({
      ...canvasLogoValues,
      align: { ...canvasLogoValues.align, vertical: event.target.value },
    });
  };

  return (
    <Fragment>
      <HeaderComponent>
        <Heading title="Keitaro Logo" className="py-2" />
      </HeaderComponent>
      <div className="list-group-item" data-testid="canvasLogo">
        <div className="form-floating my-2">
          <select
            title="Canvas Logo Options"
            onChange={(e) =>
              setCanvasLogoValues({ ...canvasLogoValues, src: e.target.value })
            }
            className="form-select"
            aria-label="Logo Type"
          >
            {logoOptions.map((option) => (
              <option key={option.label} value={option.src}>
                {option.label}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Logo Type</label>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="form-floating mb-3">
              <textarea
                className="form-control h-100"
                placeholder="Leave a comment here"
                id="logoTitleTextarea"
                rows={3}
                value={canvasLogoValues.title.content}
                onChange={(e) =>
                  setCanvasLogoValues({
                    ...canvasLogoValues,
                    title: {
                      content: e.target.value,
                      color: canvasLogoValues.title.color,
                    },
                  })
                }
              ></textarea>
              <label htmlFor="logoTitleTextarea">Enter logo title here</label>
            </div>
          </div>
          <div className="col-auto">
            <ColorPicker
              inputValue={canvasLogoValues.title.color}
              inputId="logoTitleColorPicker"
              inputTitle="Logo Title Color"
              onChange={(e: any) =>
                setCanvasLogoValues({
                  ...canvasLogoValues,
                  title: {
                    content: canvasLogoValues.title.content,
                    color: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
        <RangeControl
          id="logoOpacity"
          title="Logo Opacity"
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
          type="opacity"
        />
        <RangeControl
          id="logoHorizontalPosition"
          title="Logo Horizontal Position"
          value={canvasLogoValues.position.x}
          align={canvasLogoValues.align.horizontal}
          min={0}
          max={max - 1}
          step={maxStep}
          onHorizontalAlignChange={(e: any) => handleHorizontalAlignChange(e)}
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
          type="horizontal-position"
        />
        <RangeControl
          id="logoVerticalPosition"
          title="Logo Vertical Position"
          value={canvasLogoValues.position.y}
          align={canvasLogoValues.align.vertical}
          min={0}
          step={maxStep}
          max={max}
          onVerticalAlignChange={(e: any) => handleVerticalAlignChange(e)}
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
          type="vertical-position"
        />
      </div>
    </Fragment>
  );
};
