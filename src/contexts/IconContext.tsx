import React, { createContext, useState } from 'react';

import { CanvasIconInterface, CanvasIconValuesInterface } from '../interfaces/sidebarInterfaces'

const CanvasIconContext = createContext({} as CanvasIconInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasIconValues, setCanvasIconValues] = useState<CanvasIconValuesInterface>({
    fileImage: null,
    fileImageURL: null,
    position: {
      x: "",
      y: ""
    }
  })


  const canvasIcon = {
    canvasIconValues,
    setCanvasIconValues
  }

  return (
    <CanvasIconContext.Provider value={canvasIcon}>
      {props.children}
    </CanvasIconContext.Provider>
  );
};

export const CanvasIconContextProvider = Provider;
export const CanvasIconContextValues = CanvasIconContext; 