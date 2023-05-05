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
  });

  const [canvasHeadlineValues, setCanvasHeadlineValues] = useState<CanvasHeadlineValuesInterface>({
    content: "Headline text goes here and it can get pretty long",
    color: "#000000",
    position: {
      x: `${canvasRefs.headlineRefWidth}`,
      y: `${canvasRefs.headlineRefHeight}`
    }
  });

  const [canvasIconValues, setCanvasIconValues] = useState<CanvasIconValuesInterface>({
    fileImage: null,
    fileImageURL: null,
    position: {
      x: "",
      y: ""
    }
  });

  const [canvasBackgroundValues, setCanvasBackgroundValues] = useState<CanvasBackgroundValuesInterface>({
    color: "",
    fileImage: null,
    fileImageURL: null,
    position: {
      x: "",
      y: ""
    },
    size: ""
  });

  const [canvasLogoValues, setCanvasLogoValues] = useState<CanvasLogoValuesInterface>({
    src: keitaroFullColorLogo,
    position: {
      x: "",
      y: ""
    }
  });

  const [canvasGradientValues, setCanvasGradientValues] = useState<CanvasGradientValuesInterface[]>([{
    startColor: '#28a745',
    startColorPercentage: '50',
    endColor: '#20c997',
    endColorPercentage: '50',
    scale: '10',
    rotation: '10',
    gradientType: 'linear',
    blendingMode: "overlay"
  }])

  const canvasPreviewValues = {
    canvasRefs,
    setCanvasRefs,
    canvasHeadlineValues,
    setCanvasHeadlineValues,
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