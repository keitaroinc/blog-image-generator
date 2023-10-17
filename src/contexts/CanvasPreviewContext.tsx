import React, { createContext, useState } from "react";

import {
  CanvasPreviewContextInterface,
  CanvasBackgroundValuesInterface,
  CanvasHeadlineValuesInterface,
  CanvasIconValuesInterface,
  CanvasLogoValuesInterface,
  CanvasGradientValuesInterface,
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
  const [canvasTemplates, setCanvasTemplates] = useState<any[]>([]);
  const [currentSelectedTemplate, setCurrentSelectedTemplate] =
    useState<string>("Default");

  const [canvasAspectRatio, setCanvasAspectRatio] = useState<string>("16/9");

  const [canvasHeadlineValues, setCanvasHeadlineValues] =
    useState<CanvasHeadlineValuesInterface>({
      content: "Headline text goes here and it can get pretty long...",
      color: "#000000",
      size: 4,
      align: {
        horizontal: "",
        vertical: "",
      },
      position: {
        x: 0,
        y: 0,
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
      color: "#FFFFFF",
      scale: 1,
      padding: 0,
      align: {
        horizontal: "end",
        vertical: "",
      },
      position: {
        x: 0,
        y: 0,
      },
    });

  const [canvasBackgroundValues, setCanvasBackgroundValues] =
    useState<CanvasBackgroundValuesInterface>({
      padding: 5,
      color: "#FFFFFF",
      fileImage: null,
      fileImageURL: null,
      position: {
        x: "50",
        y: "50",
      },
      align: {
        horizontal: "",
        vertical: "",
      },
      size: "100",
      blur: 0,
    });

  const [canvasLogoValues, setCanvasLogoValues] =
    useState<CanvasLogoValuesInterface>({
      src: "KeitaroFullColorLogo",
      opacity: 100,
      title: {
        content: "",
        color: "#000000",
      },
      align: {
        horizontal: "",
        vertical: "",
      },
      position: {
        x: 0,
        y: 0,
      },
    });

  const [canvasGradientValues, setCanvasGradientValues] = useState<
    CanvasGradientValuesInterface[]
  >([]);

  const canvasPreviewValues = {
    canvasAspectRatio,
    setCanvasAspectRatio,
    canvasTemplates,
    setCanvasTemplates,
    currentSelectedTemplate,
    setCurrentSelectedTemplate,
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
