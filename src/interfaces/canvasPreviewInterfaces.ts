export interface CanvasPreviewContextInterface {
  canvasRefs: CanvasRefsInterface;
  setCanvasRefs: Function;
  canvasHeadlineValues: CanvasHeadlineValuesInterface;
  setCanvasHeadlineValues: Function;
  canvasBorderValues: CanvasBorderValuesInerface;
  setCanvasBorderValues: Function;
  canvasIconValues: CanvasIconValuesInterface;
  setCanvasIconValues: Function;
  canvasBackgroundValues: CanvasBackgroundValuesInterface;
  setCanvasBackgroundValues: Function;
  canvasLogoValues: CanvasLogoValuesInterface;
  setCanvasLogoValues: Function;
  canvasGradientValues: CanvasGradientValuesInterface[];
  setCanvasGradientValues: Function;
}

export interface CanvasRefsInterface {
  canvasRefHeight: number;
  canvasRefWidth: number;
  headlineRefWidth: number;
  headlineRefHeight: number;
  logoRefWidth: number;
  logoRefHeight: number;
}

export interface CanvasHeadlineValuesInterface {
  content: string;
  color: string;
  position: {
    x: string;
    y: string;
  };
}

export interface CanvasBorderValuesInerface {
  width: string;
  color: string
}

export interface CanvasIconValuesInterface {
  fileImage: Blob | null;
  fileImageURL: string | ArrayBuffer | null;
  color: string;
  position: {
    x: string;
    y: string;
  };
}

export interface CanvasBackgroundValuesInterface {
  color: string;
  fileImage: Blob | null;
  fileImageURL: string | ArrayBuffer | null;
  position: {
    x: string;
    y: string;
  };
  size: string;
  blur: number;
}

export interface CanvasLogoValuesInterface {
  src: string;
  position: {
    x: string;
    y: string;
  };
}

export interface CanvasGradientValuesInterface {
  startColor: string;
  startColorPercentage: string;
  endColor: string;
  endColorPercentage: string;
  scale: string;
  rotation: string;
  gradientType: string;
  blendingMode: string;
  opacity: string;
}