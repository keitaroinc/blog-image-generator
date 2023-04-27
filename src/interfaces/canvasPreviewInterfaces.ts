export interface CanvasPreviewContextInterface {
  canvasContextValues: CanvasPreviewValuesIntarface;
  setCanvasContextValues: Function;
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
}

