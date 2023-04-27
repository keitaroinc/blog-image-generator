import React, { createContext, useState } from 'react';

import { CanvasBackgroundInterface, CanvasBackgroundValuesInterface } from '../interfaces/sidebarInterfaces'

const CanvasBackgroundContext = createContext({} as CanvasBackgroundInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasBackgroundValues, setCanvasBackgroundValues] = useState<CanvasBackgroundValuesInterface>({
    color: "",
    image: "",
    position: {
      x: "",
      y: ""
    },
    size: ""
  })

  const canvasBackground = {
    canvasBackgroundValues,
    setCanvasBackgroundValues
  }

  return (
    <CanvasBackgroundContext.Provider value={canvasBackground}>
      {props.children}
    </CanvasBackgroundContext.Provider>
  );
};

export const CanvasBackgroundContextProvider = Provider;
export const CanvasBackgroundContextValues = CanvasBackgroundContext; 