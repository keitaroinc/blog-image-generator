import * as React from "react";
import "./CanvasWrapper.scss";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";

export const CanvasWrapper: React.FC<{ className?: string }> = ({ className }) => {
  const {
    canvasHeadlineValues,
    setCanvasRefs } = React.useContext(CanvasPreviewContextValues);

  const canvasRef = React.useRef<HTMLDivElement>(null)
  const headlineRef = React.useRef<HTMLHeadingElement>(null);

  React.useLayoutEffect(() => {
    function updateSize() {
      setCanvasRefs({
        canvasRefHeight: canvasRef.current?.clientHeight,
        canvasRefWidth: canvasRef.current?.clientWidth,
        headlineRefHeight: headlineRef.current?.clientHeight,
        headlineRefWidth: headlineRef.current?.clientWidth
      })
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={className}>
      <div className="canvas grid flex-grow-1" ref={canvasRef}>
        <h1
          className="title w-75"
          style={{ transform: `translate(${canvasHeadlineValues.position.x}px, ${canvasHeadlineValues.position.y}px)`, color: canvasHeadlineValues.color }}
          ref={headlineRef}
        >
          {canvasHeadlineValues.content}
        </h1>
        <div className="icon">
          <img
            className="w-25 h-25 justify-self-end"
            src="/image-generator/static/media/keitaro-logo-full-color.44775c6e1a17ea7494df1b4c93c5dd09.svg"
            alt="Keitaro logo"
          />
        </div>
        <img
          className="align-self-end logo"
          src="/image-generator/static/media/keitaro-logo-full-color.44775c6e1a17ea7494df1b4c93c5dd09.svg"
          alt="Keitaro logo"
        />
      </div>
      <button className="btn btn-lg btn-keitaro-alt text-light">Download</button>
    </div>
  );
};