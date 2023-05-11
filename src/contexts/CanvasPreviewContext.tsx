import React, { createContext, useState } from 'react';

import { CanvasPreviewContextInterface, CanvasBackgroundValuesInterface, CanvasHeadlineValuesInterface, CanvasIconValuesInterface, CanvasLogoValuesInterface, CanvasGradientValuesInterface, CanvasRefsInterface } from '../interfaces/canvasPreviewInterfaces'

import keitaroFullColorLogo from "../assets/svg/keitaro-logo-full-color.svg"

const CanvasPreviewContext = createContext({} as CanvasPreviewContextInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasRefs, setCanvasRefs] = React.useState<CanvasRefsInterface>({
    canvasRefWidth: 0,
    canvasRefHeight: 0,
    headlineRefWidth: 0,
    headlineRefHeight: 0,
    logoRefWidth: 0,
    logoRefHeight: 0
  });

  const [canvasHeadlineValues, setCanvasHeadlineValues] = useState<CanvasHeadlineValuesInterface>({
    content: "Headline text goes here and it can get pretty long",
    color: "#000000",
    fontSize: "3",
    position: {
      x: `${canvasRefs.headlineRefWidth}`,
      y: `${canvasRefs.headlineRefHeight}`
    }
  });

  const [canvasBorderValues, setCanvasBorderValues] = useState({
    width: "0",
    color: "#000000"
  })

  const [canvasIconValues, setCanvasIconValues] = useState<CanvasIconValuesInterface>({
    fileImage: null,
    fileImageURL: null,
    color: "var(--bs-gray-300)",
    position: {
      x: "10",
      y: "100"
    }
  });

  const [canvasBackgroundValues, setCanvasBackgroundValues] = useState<CanvasBackgroundValuesInterface>({
    color: "#FFFFFF",
    fileImage: null,
    fileImageURL: null,
    position: {
      x: "50",
      y: "50"
    },
    size: "100",
    blur: 0
  });

  const [canvasLogoValues, setCanvasLogoValues] = useState<CanvasLogoValuesInterface>({
    src: keitaroFullColorLogo,
    position: {
      x: `${canvasRefs.logoRefWidth}`,
      y: `${canvasRefs.logoRefHeight}`
    }
  });

  const [canvasGradientValues, setCanvasGradientValues] = useState<CanvasGradientValuesInterface[]>([])

  const canvasPreviewValues = {
    canvasRefs,
    setCanvasRefs,
    canvasHeadlineValues,
    setCanvasHeadlineValues,
    canvasBorderValues,
    setCanvasBorderValues,
    canvasIconValues,
    setCanvasIconValues,
    canvasBackgroundValues,
    setCanvasBackgroundValues,
    canvasLogoValues,
    setCanvasLogoValues,
    canvasGradientValues,
    setCanvasGradientValues
  }

  return (
    <CanvasPreviewContext.Provider value={canvasPreviewValues}>
      {props.children}
    </CanvasPreviewContext.Provider>
  );
};

export const CanvasPreviewContextProvider = Provider;
export const CanvasPreviewContextValues = CanvasPreviewContext;
