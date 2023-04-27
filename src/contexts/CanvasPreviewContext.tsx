import React, { createContext, useState } from 'react';

import { CanvasPreviewContextInterface, CanvasPreviewValuesIntarface } from '../interfaces/canvasPreviewInterfaces'

const CanvasPreviewContext = createContext({} as CanvasPreviewContextInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasContextValues, setCanvasContextValues] = useState<CanvasPreviewValuesIntarface>({
    canvasWidth: 0,
    aspectRatio: "",
    canvasBorderStyle: "",
    canvasBorderWidth: 0,
    canvasBackground: {
      color: "",
      image: "",
      position: {
        x: "",
        y: ""
      },
      size: ""
    },
    canvasGradients: [
      {
        type: "",
        rotation: "",
        startColor: "",
        endColor: "",
        blendingMode: "",
      }
    ],
    canvasIcon: {
      src: "",
      position: {
        x: "",
        y: ""
      }
    },
    canvasHeadline: {
      content: "",
      position: {
        x: "",
        y: ""
      }
    },
    canvasLogo: {
      src: "",
      position: {
        x: "",
        y: ""
      }
    }
  })


  const canvasPreviewValues = {
    canvasContextValues,
    setCanvasContextValues
  }

  return (
    <CanvasPreviewContext.Provider value={canvasPreviewValues}>
      {props.children}
    </CanvasPreviewContext.Provider>
  );
};

export const CanvasPreviewContextProvider = Provider;
export const CanvasPreviewContextValues = CanvasPreviewContext; 