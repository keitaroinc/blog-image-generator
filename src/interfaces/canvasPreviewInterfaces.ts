export interface CanvasPreviewContextInterface {
  canvasAspectRatio: string;
  setCanvasAspectRatio: Function;
  canvasTemplates: any[];
  setCanvasTemplates: Function;
  currentSelectedTemplate: string;
  setCurrentSelectedTemplate: Function;
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

export interface CanvasHeadlineValuesInterface {
  content: string;
  color: string;
  size: number;
  align: {
    horizontal: string;
    vertical: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export interface CanvasBorderValuesInerface {
  width: number;
  color: string;
}

export interface CanvasIconValuesInterface {
  fileImage: Blob | null;
  fileImageURL: string | ArrayBuffer | null;
  color: string;
  scale: number;
  padding: number;
  align: {
    horizontal: string;
    vertical: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export interface CanvasBackgroundValuesInterface {
  color: string;
  fileImage: Blob | null;
  fileImageURL: string | ArrayBuffer | null;
  align: {
    horizontal: string;
    vertical: string;
  };
  position: {
    x: string;
    y: string;
  };
  size: string;
  blur: number;
}

export interface CanvasLogoValuesInterface {
  src: string;
  opacity: number;
  title: {
    content: string;
    color: string;
  };
  align: {
    horizontal: string;
    vertical: string;
  };
  position: {
    x: number;
    y: number;
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
