import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { Heading } from "../Heading/Heading";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { RangeControl } from "../RangeControl/RangeControl";

interface CanvasLogoProps { }

const logoOptions = [
  { src: `<?xml version="1.0" encoding="UTF-8"?><svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 90"><g id="c"><polygon points="50 60 60 70 40 70 40 50 50 60" fill="#0e9842"/><polygon points="70 50 60 60 80 60 80 40 70 50" fill="#8cc04b"/><polygon points="40 40 50 30 30 30 30 50 40 40" fill="#8cc04b"/><polygon points="60 30 50 20 70 20 70 40 60 30" fill="#0e9842"/><circle cx="55" cy="45" r="5" fill="#99938b"/></g><g id="d"><path d="m103.27,42.88l12.73-12.87h4.48l-13.99,13.99,14.44,16.02h-4.57l-12.24-13.77-.85.86v12.91h-3.32v-30.01h3.32v12.87Z" fill="#99938b"/><path d="m140.16,33.16h-12.19v8.91h11.83v3.15h-11.83v11.66h12.19v3.15h-15.51v-30.01h15.51v3.15Z" fill="#99938b"/><path d="m149.47,30.02v30.01h-3.32v-30.01h3.32Z" fill="#99938b"/><path d="m165.45,33.16v26.86h-3.32v-26.86h-7.26v-3.15h17.84v3.15h-7.26Z" fill="#99938b"/><path d="m192.03,51.57h-12.73l-3.59,8.46h-3.68l13.76-31.45,13.4,31.45h-3.68l-3.5-8.46Zm-1.3-3.15l-5.02-12.01-5.11,12.01h10.13Z" fill="#99938b"/><path d="m208.06,30.02c2.02,0,5.02.13,7.26,1.67,1.75,1.17,3.27,3.46,3.27,6.66,0,4.59-3,7.96-7.53,8.28l9.5,13.41h-4.04l-9.1-13.14h-.85v13.14h-3.32v-30.01h4.8Zm-1.48,13.9h2.11c4.12,0,6.59-1.98,6.59-5.49,0-1.66-.49-3.33-2.38-4.41-1.34-.76-2.87-.86-4.3-.86h-2.02v10.75Z" fill="#99938b"/><path d="m223.48,45.04c0-8.96,6.95-15.52,15.56-15.52s15.56,6.57,15.56,15.52-6.9,15.52-15.56,15.52-15.56-6.62-15.56-15.52Zm3.41,0c0,6.88,5.42,12.37,12.15,12.37s12.15-5.49,12.15-12.37-5.42-12.38-12.15-12.38-12.15,5.49-12.15,12.38Z" fill="#99938b"/></g></svg>`, label: "Full Color" },
  { src: `<?xml version="1.0" encoding="UTF-8"?><svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 90"><g id="c"><polygon points="50 60 60 70 40 70 40 50 50 60" fill="#8a8a8a"/><polygon points="70 50 60 60 80 60 80 40 70 50" fill="#bfbfbf"/><polygon points="40 40 50 30 30 30 30 50 40 40" fill="#bfbfbf"/><polygon points="60 30 50 20 70 20 70 40 60 30" fill="#8a8a8a"/><circle cx="55" cy="45" r="5" fill="#858585"/></g><g id="d"><path d="m103.27,42.88l12.73-12.87h4.48l-13.99,13.99,14.44,16.02h-4.57l-12.24-13.77-.85.86v12.91h-3.32v-30.01h3.32v12.87Z" fill="#858585"/><path d="m140.16,33.16h-12.19v8.91h11.83v3.15h-11.83v11.66h12.19v3.15h-15.51v-30.01h15.51v3.15Z" fill="#858585"/><path d="m149.47,30.02v30.01h-3.32v-30.01h3.32Z" fill="#858585"/><path d="m165.45,33.16v26.86h-3.32v-26.86h-7.26v-3.15h17.84v3.15h-7.26Z" fill="#858585"/><path d="m192.03,51.57h-12.73l-3.59,8.46h-3.68l13.76-31.45,13.4,31.45h-3.68l-3.5-8.46Zm-1.3-3.15l-5.02-12.01-5.11,12.01h10.13Z" fill="#858585"/><path d="m208.06,30.02c2.02,0,5.02.13,7.26,1.67,1.75,1.17,3.27,3.46,3.27,6.66,0,4.59-3,7.96-7.53,8.28l9.5,13.41h-4.04l-9.1-13.14h-.85v13.14h-3.32v-30.01h4.8Zm-1.48,13.9h2.11c4.12,0,6.59-1.98,6.59-5.49,0-1.66-.49-3.33-2.38-4.41-1.34-.76-2.87-.86-4.3-.86h-2.02v10.75Z" fill="#858585"/><path d="m223.48,45.04c0-8.96,6.95-15.52,15.56-15.52s15.56,6.57,15.56,15.52-6.9,15.52-15.56,15.52-15.56-6.62-15.56-15.52Zm3.41,0c0,6.88,5.42,12.37,12.15,12.37s12.15-5.49,12.15-12.37-5.42-12.38-12.15-12.38-12.15,5.49-12.15,12.38Z" fill="#858585"/></g></svg>`, label: "Grayscale" },
  { src: `<?xml version="1.0" encoding="UTF-8"?><svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 90"><g id="c"><polygon points="50 60 60 70 40 70 40 50 50 60" fill="#1d1d1b"/><polygon points="70 50 60 60 80 60 80 40 70 50" fill="#1d1d1b"/><polygon points="40 40 50 30 30 30 30 50 40 40" fill="#1d1d1b"/><polygon points="60 30 50 20 70 20 70 40 60 30" fill="#1d1d1b"/><circle cx="55" cy="45" r="5" fill="#1d1d1b"/></g><g id="d"><path d="m103.27,42.88l12.73-12.87h4.48l-13.99,13.99,14.44,16.02h-4.57l-12.24-13.77-.85.86v12.91h-3.32v-30.01h3.32v12.87Z" fill="#1d1d1b"/><path d="m140.16,33.16h-12.19v8.91h11.83v3.15h-11.83v11.66h12.19v3.15h-15.51v-30.01h15.51v3.15Z" fill="#1d1d1b"/><path d="m149.47,30.02v30.01h-3.32v-30.01h3.32Z" fill="#1d1d1b"/><path d="m165.45,33.16v26.86h-3.32v-26.86h-7.26v-3.15h17.84v3.15h-7.26Z" fill="#1d1d1b"/><path d="m192.03,51.57h-12.73l-3.59,8.46h-3.68l13.76-31.45,13.4,31.45h-3.68l-3.5-8.46Zm-1.3-3.15l-5.02-12.01-5.11,12.01h10.13Z" fill="#1d1d1b"/><path d="m208.06,30.02c2.02,0,5.02.13,7.26,1.67,1.75,1.17,3.27,3.46,3.27,6.66,0,4.59-3,7.96-7.53,8.28l9.5,13.41h-4.04l-9.1-13.14h-.85v13.14h-3.32v-30.01h4.8Zm-1.48,13.9h2.11c4.12,0,6.59-1.98,6.59-5.49,0-1.66-.49-3.33-2.38-4.41-1.34-.76-2.87-.86-4.3-.86h-2.02v10.75Z" fill="#1d1d1b"/><path d="m223.48,45.04c0-8.96,6.95-15.52,15.56-15.52s15.56,6.57,15.56,15.52-6.9,15.52-15.56,15.52-15.56-6.62-15.56-15.52Zm3.41,0c0,6.88,5.42,12.37,12.15,12.37s12.15-5.49,12.15-12.37-5.42-12.38-12.15-12.38-12.15,5.49-12.15,12.38Z" fill="#1d1d1b"/></g></svg>`, label: "Black" },
  { src: `<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 90"><g id="b"><polygon points="50 60 60 70 40 70 40 50 50 60" fill="#fff"/><polygon points="70 50 60 60 80 60 80 40 70 50" fill="#fff"/><polygon points="40 40 50 30 30 30 30 50 40 40" fill="#fff"/><polygon points="60 30 50 20 70 20 70 40 60 30" fill="#fff"/><circle cx="55" cy="45" r="5" fill="#fff"/></g><g id="c"><path d="m103.27,42.88l12.73-12.87h4.48l-13.99,13.99,14.44,16.02h-4.57l-12.24-13.77-.85.86v12.91h-3.32v-30.01h3.32v12.87h0Z" fill="#fff"/><path d="m140.16,33.16h-12.19v8.91h11.83v3.15h-11.83v11.66h12.19v3.15h-15.51v-30.01h15.51v3.15h0Z" fill="#fff"/><path d="m149.47,30.02v30.01h-3.32v-30.01s3.32,0,3.32,0Z" fill="#fff"/><path d="m165.45,33.16v26.86h-3.32v-26.86h-7.26v-3.15h17.84v3.15h-7.26Z" fill="#fff"/><path d="m192.03,51.57h-12.73l-3.59,8.46h-3.68l13.76-31.45,13.4,31.45h-3.68l-3.5-8.46h.02Zm-1.3-3.15l-5.02-12.01-5.11,12.01h10.13Z" fill="#fff"/><path d="m208.06,30.02c2.02,0,5.02.13,7.26,1.67,1.75,1.17,3.27,3.46,3.27,6.66,0,4.59-3,7.96-7.53,8.28l9.5,13.41h-4.04l-9.1-13.14h-.85v13.14h-3.32v-30.01h4.81Zm-1.48,13.9h2.11c4.12,0,6.59-1.98,6.59-5.49,0-1.66-.49-3.33-2.38-4.41-1.34-.76-2.87-.86-4.3-.86h-2.02v10.75h0Z" fill="#fff"/><path d="m223.48,45.04c0-8.96,6.95-15.52,15.56-15.52s15.56,6.57,15.56,15.52-6.9,15.52-15.56,15.52-15.56-6.62-15.56-15.52Zm3.41,0c0,6.88,5.42,12.37,12.15,12.37s12.15-5.49,12.15-12.37-5.42-12.38-12.15-12.38-12.15,5.49-12.15,12.38Z" fill="#fff"/></g></svg>`, label: "White" },
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
