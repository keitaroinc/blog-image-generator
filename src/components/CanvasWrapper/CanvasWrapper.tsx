import React, { useCallback } from "react";
import "./CanvasWrapper.scss";
import { toJpeg, toPng } from "html-to-image";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { GradientComponent } from "../GradientComponent/GradientComponent";
import { LogoComponent } from "../LogoComponent/LogoComponent";

const aspectRatioOptions = ["16/9", "16/10", "5/3", "4/3", "1/1"];

export const CanvasWrapper: React.FC<{ className?: string }> = ({
  className,
}) => {
  const {
    canvasWidth,
    setCanvasWidth,
    canvasHeadlineValues,
    canvasBorderValues,
    canvasLogoValues,
    canvasIconValues,
    canvasBackgroundValues,
    canvasGradientValues,
    canvasAspectRatio,
    setCanvasAspectRatio,
  } = React.useContext(CanvasPreviewContextValues);

  const canvasRef = React.useRef<HTMLDivElement>(null);
  const headlineRef = React.useRef<HTMLHeadingElement>(null);

  const onDownload = useCallback(
    (type: string) => {
      if (canvasRef.current === null) {
        return;
      }
      if (type === "png") {
        toPng(canvasRef.current, {
          canvasWidth: canvasWidth,
          canvasHeight:
            canvasWidth /
            (canvasRef.current?.clientWidth / canvasRef.current?.clientHeight),
          quality: 0.92,
          pixelRatio: 1,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = `${canvasHeadlineValues.content
              .toLowerCase()
              .split(" ")
              .join("-")}.png`;
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (type === "jpg") {
        toJpeg(canvasRef.current, {
          canvasWidth: canvasWidth,
          canvasHeight:
            canvasWidth /
            (canvasRef.current?.clientWidth / canvasRef.current?.clientHeight),
          quality: 0.92,
          pixelRatio: 1,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = `${canvasHeadlineValues.content
              .toLowerCase()
              .split(" ")
              .join("-")}.jpg`;
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [canvasHeadlineValues.content, canvasWidth, canvasRef]
  );

  return (
    <div className={className} data-testid="CanvasWrapper">
      <div
        className={`canvas grid flex-fill`}
        data-testid="canvasPreviewWrapper"
        ref={canvasRef}
        style={{
          padding: `${canvasBackgroundValues.padding}em`,
          backgroundColor: `${canvasBackgroundValues.color}`,
          borderColor: canvasBorderValues.color,
          borderWidth: `${canvasBorderValues.width}em`,
          aspectRatio: `${canvasAspectRatio}`,
          width: `${canvasWidth}px`,
        }}
      >
        {canvasBackgroundValues.fileImageURL ? (
          <div
            className={`blur`}
            style={{
              backgroundImage: `url(${canvasBackgroundValues.fileImageURL})`,
              backgroundSize: `auto ${canvasBackgroundValues.size}%`,
              backgroundPosition: `${canvasBackgroundValues.position.x}% ${canvasBackgroundValues.position.y}%`,
              backgroundRepeat: "no-repeat",
              filter: `blur(${canvasBackgroundValues.blur}px)`,
            }}
          ></div>
        ) : null}
        <GradientComponent canvasGradientValues={canvasGradientValues} />
        <h1
          className={`title ${
            canvasHeadlineValues.align.horizontal
              ? `align-h-${canvasHeadlineValues.align.horizontal} text-${canvasHeadlineValues.align.horizontal}`
              : ``
          } ${
            canvasHeadlineValues.align.vertical
              ? `align-v-${canvasHeadlineValues.align.vertical}`
              : ``
          }`}
          data-testid="canvasHeadlineTitle"
          style={{
            left: `${Number(canvasHeadlineValues.position.x)}em`,
            top: `${Number(canvasHeadlineValues.position.y)}em`,
            color: canvasHeadlineValues.color,
            fontSize: `${canvasHeadlineValues.size}em`,
            width: `${canvasHeadlineValues.width}%`,
          }}
          ref={headlineRef}
        >
          {canvasHeadlineValues.content}
        </h1>
        {canvasIconValues.fileImageURL && (
          <div
            className={`icon ${
              canvasIconValues.align.horizontal
                ? `align-h-${canvasIconValues.align.horizontal}`
                : ``
            } ${
              canvasIconValues.align.vertical
                ? `align-v-${canvasIconValues.align.vertical}`
                : ``
            }`}
            style={{
              left: `${Number(canvasIconValues.position.x)}em`,
              top: `${Number(canvasIconValues.position.y)}em`,
              transform: `scale(${1 * canvasIconValues.scale})`,
            }}
          >
            <img
              className={`justify-self-end ${
                canvasIconValues.mask ? `rounded` : ``
              }${
                canvasIconValues.mask !== "rounded"
                  ? `-${canvasIconValues.mask}`
                  : ` rounded-5 h-auto`
              } object-fit-cover`}
              src={`${canvasIconValues.fileImageURL}`}
              alt="Canvas icon"
              style={{
                border: `${canvasIconValues.border}vw ${canvasIconValues.borderType} ${canvasIconValues.color}`,
              }}
            />
          </div>
        )}
        <div
          className={`logo ${
            canvasLogoValues.align.horizontal
              ? `align-h-${canvasLogoValues.align.horizontal}`
              : ``
          } ${
            canvasLogoValues.align.vertical
              ? `align-v-${canvasLogoValues.align.vertical}`
              : ``
          }`}
          data-testid="canvasLogoPreview"
          style={{
            left: `${Number(canvasLogoValues.position.x)}em`,
            bottom: `${Number(canvasLogoValues.position.y)}em`,
            opacity: `${canvasLogoValues.opacity}%`,
          }}
        >
          {canvasLogoValues.title.content ? (
            <span
              className="title text-uppercase mb-4 text-center px-3 py-3 align-self-center"
              style={{
                color: canvasLogoValues.title.color,
                borderBottomColor: canvasLogoValues.title.color,
              }}
            >
              {canvasLogoValues.title.content}
            </span>
          ) : null}
          <LogoComponent logoType={canvasLogoValues.src} />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="form-floating">
            <input
              className="form-control"
              type="number"
              id="canvasWidth"
              onChange={(e) => setCanvasWidth(parseInt(e.target.value))}
              aria-label="Enter image size"
              value={canvasWidth}
            />
            <label htmlFor="canvasWidth">Image Width</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <select
              id="canvasAspectRatio"
              onChange={(e) => setCanvasAspectRatio(e.target.value)}
              className="form-select"
              aria-label="Select canvas aspect ratio"
              value={canvasAspectRatio}
            >
              {aspectRatioOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="canvasAspectRatio">Aspect Ratio</label>
          </div>
        </div>
        <div className="col btn-group">
          <button
            type="button"
            className="btn btn-lg text-light btn-keitaro-alt"
            onClick={() => onDownload("png")}
          >
            Download
          </button>
          <button
            type="button"
            className="btn btn-keitaro-alt text-light dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => onDownload("png")}>
              PNG
            </li>
            <li className="dropdown-item" onClick={() => onDownload("jpg")}>
              JPG
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
