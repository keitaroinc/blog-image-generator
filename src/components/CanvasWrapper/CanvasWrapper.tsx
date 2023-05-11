import React, { useCallback } from "react";
import "./CanvasWrapper.scss";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { GradientComponent } from "../GradientComponent/GradientComponent";
import { toJpeg, toPng } from "html-to-image";

export const CanvasWrapper: React.FC<{ className?: string }> = ({
  className,
}) => {
  const {
    canvasHeadlineValues,
    canvasBorderValues,
    canvasLogoValues,
    canvasIconValues,
    canvasBackgroundValues,
    canvasGradientValues,
    setCanvasRefs,
  } = React.useContext(CanvasPreviewContextValues);

  const canvasRef = React.useRef<HTMLDivElement>(null);
  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  const logoRef = React.useRef<HTMLImageElement>(null);

  React.useLayoutEffect(() => {
    function updateSize() {
      setCanvasRefs({
        canvasRefHeight: canvasRef.current?.clientHeight,
        canvasRefWidth: canvasRef.current?.clientWidth,
        headlineRefHeight: headlineRef.current?.clientHeight,
        headlineRefWidth: headlineRef.current?.clientWidth,
        logoRefHeight: logoRef.current?.clientHeight,
        logoRefWidth: logoRef.current?.clientWidth,
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDownload = useCallback(
    (type: string) => {
      if (canvasRef.current === null) {
        return;
      }
      if (type === "png") {
        toPng(canvasRef.current, { cacheBust: true, pixelRatio: 2 })
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
        toJpeg(canvasRef.current, { cacheBust: true, pixelRatio: 2 })
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
    [canvasHeadlineValues.content, canvasRef]
  );

  return (
    <div className={className}>
      <div
        className="canvas grid flex-grow-1"
        ref={canvasRef}
        style={{
          backgroundColor: `${canvasBackgroundValues.color}`,
          backgroundImage: `url(${
            canvasBackgroundValues.fileImageURL !== ""
              ? canvasBackgroundValues.fileImageURL
              : null
          })`,
          backgroundSize: `auto ${canvasBackgroundValues.size}%`,
          backgroundPosition: `${canvasBackgroundValues.position.x}% ${canvasBackgroundValues.position.y}%`,
          borderColor: canvasBorderValues.color,
          borderWidth: `${canvasBorderValues.width}em`,
        }}
      >
        {canvasBackgroundValues.fileImageURL && canvasBackgroundValues.blur ? (
          <div
            className="blur"
            style={{ backdropFilter: `blur(${canvasBackgroundValues.blur}px)` }}
          ></div>
        ) : null}
        <GradientComponent canvasGradientValues={canvasGradientValues} />
        <h1
          className={`title`}
          style={{
            gridColumnStart: canvasHeadlineValues.position.x,
            gridColumnEnd: 12,
            gridRowStart: canvasHeadlineValues.position.y,
            gridRowEnd: 12,
            color: canvasHeadlineValues.color,
            fontSize: `${canvasHeadlineValues.size}em`
          }}
          ref={headlineRef}
        >
          {canvasHeadlineValues.content}
        </h1>
        {canvasIconValues.fileImageURL && (
          <div
            className="icon"
            style={{
              gridColumnStart: canvasIconValues.position.x,
              gridRowStart: canvasIconValues.position.y,
              backgroundColor: `${canvasIconValues.color}`,
              transform: `scale(${1 * canvasIconValues.scale})`,
              padding: `${canvasIconValues.padding}em`
            }}
          >
            <img
              className="justify-self-end"
              src={
                canvasIconValues.fileImageURL
                  ? `${canvasIconValues.fileImageURL}`
                  : "/image-generator/static/media/keitaro-logo-full-color.44775c6e1a17ea7494df1b4c93c5dd09.svg"
              }
              alt="Keitaro logo"
            />
          </div>
        )}
        <img
          className="align-self-end logo"
          src={canvasLogoValues.src}
          alt="Keitaro logo"
          ref={logoRef}
          style={{
            gridColumnStart: canvasLogoValues.position.x,
            gridRowStart: canvasLogoValues.position.y,
            opacity: `${canvasLogoValues.opacity}%`
          }}
        />
      </div>

      <div className="btn-group">
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
          <li
            className="dropdown-item"
            role="button"
            onClick={() => onDownload("png")}
          >
            PNG
          </li>
          <li
            className="dropdown-item"
            role="button"
            onClick={() => onDownload("jpg")}
          >
            JPG
          </li>
        </ul>
      </div>
    </div>
  );
};
