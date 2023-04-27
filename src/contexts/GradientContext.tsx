import React, { createContext, useState } from 'react';

import { CanvasGradientInterface, CanvasGradientValuesInterface } from '../interfaces/sidebarInterfaces'

const CanvasGradientContext = createContext({} as CanvasGradientInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasGradientValues, setCanvasGradientValues] = useState<CanvasGradientValuesInterface>({
    type: "",
    rotation: "",
    startColor: "",
    endColor: "",
    blendingMode: "",
  })


  const canvasGradient = {
    canvasGradientValues,
    setCanvasGradientValues
  }

  return (
    <CanvasGradientContext.Provider value={canvasGradient}>
      {props.children}
    </CanvasGradientContext.Provider>
  );
};

export const CanvasGradientContextProvider = Provider;
export const CanvasGradientContextValues = CanvasGradientContext; 