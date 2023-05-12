import React, { createContext, useState } from "react";

import {
  CanvasPreviewContextInterface,
  CanvasBackgroundValuesInterface,
  CanvasHeadlineValuesInterface,
  CanvasIconValuesInterface,
  CanvasLogoValuesInterface,
  CanvasGradientValuesInterface,
  CanvasRefsInterface,
} from "../interfaces/canvasPreviewInterfaces";

const CanvasPreviewContext = createContext({} as CanvasPreviewContextInterface);

export const Provider = (props: {
  children:
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactFragment
  | React.ReactPortal
  | null
  | undefined;
}) => {
  const [canvasRefs, setCanvasRefs] = React.useState<CanvasRefsInterface>({
    canvasRefWidth: 0,
    canvasRefHeight: 0,
    headlineRefWidth: 0,
    headlineRefHeight: 0,
    logoRefWidth: 0,
    logoRefHeight: 0,
  });

  const [canvasHeadlineValues, setCanvasHeadlineValues] =
    useState<CanvasHeadlineValuesInterface>({
      content: "Headline text goes here and it can get pretty long",
      color: "#000000",
      size: 4,
      position: {
        x: 2,
        y: 2,
      },
    });

  const [canvasBorderValues, setCanvasBorderValues] = useState({
    width: 0,
    color: "#000000",
  });

  const [canvasIconValues, setCanvasIconValues] =
    useState<CanvasIconValuesInterface>({
      fileImage: null,
      fileImageURL: null,
      color: "var(--bs-gray-300)",
      scale: 1,
      padding: 0,
      position: {
        x: 10,
        y: 9,
      },
    });

  const [canvasBackgroundValues, setCanvasBackgroundValues] =
    useState<CanvasBackgroundValuesInterface>({
      color: "#FFFFFF",
      fileImage: null,
      fileImageURL: null,
      position: {
        x: "50",
        y: "50",
      },
      size: "100",
      blur: 0,
    });

  const [canvasLogoValues, setCanvasLogoValues] =
    useState<CanvasLogoValuesInterface>({
      src: `<?xml version="1.0" encoding="UTF-8"?><svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 90"><g id="c"><polygon points="50 60 60 70 40 70 40 50 50 60" fill="#0e9842"/><polygon points="70 50 60 60 80 60 80 40 70 50" fill="#8cc04b"/><polygon points="40 40 50 30 30 30 30 50 40 40" fill="#8cc04b"/><polygon points="60 30 50 20 70 20 70 40 60 30" fill="#0e9842"/><circle cx="55" cy="45" r="5" fill="#99938b"/></g><g id="d"><path d="m103.27,42.88l12.73-12.87h4.48l-13.99,13.99,14.44,16.02h-4.57l-12.24-13.77-.85.86v12.91h-3.32v-30.01h3.32v12.87Z" fill="#99938b"/><path d="m140.16,33.16h-12.19v8.91h11.83v3.15h-11.83v11.66h12.19v3.15h-15.51v-30.01h15.51v3.15Z" fill="#99938b"/><path d="m149.47,30.02v30.01h-3.32v-30.01h3.32Z" fill="#99938b"/><path d="m165.45,33.16v26.86h-3.32v-26.86h-7.26v-3.15h17.84v3.15h-7.26Z" fill="#99938b"/><path d="m192.03,51.57h-12.73l-3.59,8.46h-3.68l13.76-31.45,13.4,31.45h-3.68l-3.5-8.46Zm-1.3-3.15l-5.02-12.01-5.11,12.01h10.13Z" fill="#99938b"/><path d="m208.06,30.02c2.02,0,5.02.13,7.26,1.67,1.75,1.17,3.27,3.46,3.27,6.66,0,4.59-3,7.96-7.53,8.28l9.5,13.41h-4.04l-9.1-13.14h-.85v13.14h-3.32v-30.01h4.8Zm-1.48,13.9h2.11c4.12,0,6.59-1.98,6.59-5.49,0-1.66-.49-3.33-2.38-4.41-1.34-.76-2.87-.86-4.3-.86h-2.02v10.75Z" fill="#99938b"/><path d="m223.48,45.04c0-8.96,6.95-15.52,15.56-15.52s15.56,6.57,15.56,15.52-6.9,15.52-15.56,15.52-15.56-6.62-15.56-15.52Zm3.41,0c0,6.88,5.42,12.37,12.15,12.37s12.15-5.49,12.15-12.37-5.42-12.38-12.15-12.38-12.15,5.49-12.15,12.38Z" fill="#99938b"/></g></svg>`,
      opacity: 100,
      position: {
        x: 1,
        y: 12,
      },
    });

  const [canvasGradientValues, setCanvasGradientValues] = useState<
    CanvasGradientValuesInterface[]
  >([]);

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
    setCanvasGradientValues,
  };

  return (
    <CanvasPreviewContext.Provider value={canvasPreviewValues}>
      {props.children}
    </CanvasPreviewContext.Provider>
  );
};

export const CanvasPreviewContextProvider = Provider;
export const CanvasPreviewContextValues = CanvasPreviewContext;
