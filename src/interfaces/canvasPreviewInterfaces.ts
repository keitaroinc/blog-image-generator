export interface CanvasPreviewContextInterface {
  canvasHeadlineValues: CanvasHeadlineValuesInterface;
  setCanvasHeadlineValues: Function;
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
  position: {
    x: string;
    y: string;
  };
}

export interface CanvasIconValuesInterface {
  fileImage: Blob | null;
  fileImageURL: string | ArrayBuffer | null;
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
}

export interface CanvasPreviewValuesIntarface {
  canvasWidth: number,
  aspectRatio: string,
  canvasBorderStyle: string,
  canvasBorderWidth: number,
  canvasBackground: {
    color: string,
    image: string,
    position: {
      x: string,
      y: string
    },
    size: string
  },
  canvasGradients: [
    {
      type: string,
      rotation: string,
      startColor: string,
      endColor: string,
      blendingMode: string,
    }
  ],
  canvasIcon: {
    src: string,
    position: {
      x: string,
      y: string
    }
  },
  canvasHeadline: {
    content: string,
    position: {
      x: string,
      y: string
    }
  }
  canvasLogo: {
    src: string,
    position: {
      x: string,
      y: string
    }
  }
};