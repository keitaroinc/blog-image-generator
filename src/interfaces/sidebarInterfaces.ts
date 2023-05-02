export interface CanvasHeadlineInterface {
  canvasHeadlineValues: CanvasHeadlineValuesInterface;
  setCanvasHeadlineValues: Function;
}

export interface CanvasHeadlineValuesInterface {
  content: string,
  position: {
    x: string,
    y: string
  }
}

export interface CanvasIconInterface {
  canvasIconValues: CanvasIconValuesInterface;
  setCanvasIconValues: Function;
}

export interface CanvasIconValuesInterface {
  src: string,
  position: {
    x: string,
    y: string
  }
}

export interface CanvasBackgroundInterface {
  canvasBackgroundValues: CanvasBackgroundValuesInterface;
  setCanvasBackgroundValues: Function;
}

export interface CanvasBackgroundValuesInterface {
  color: string,
  fileImage: Blob | null,
  fileImageURL: string | ArrayBuffer | null,
  position: {
    x: string,
    y: string
  },
  size: string
}

export interface CanvasLogoInterface {
  canvasLogoValues: CanvasLogoValuesInterface;
  setCanvasLogoValues: Function;
}

export interface CanvasLogoValuesInterface {
  src: string,
  position: {
    x: string,
    y: string
  }
}

export interface CanvasGradientInterface {
  canvasGradientValues: CanvasGradientValuesInterface;
  setCanvasGradientValues: Function;
}

export interface CanvasGradientValuesInterface {
  type: string,
  rotation: string,
  startColor: string,
  endColor: string,
  blendingMode: string,
}