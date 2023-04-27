import React, { createContext, useState } from 'react';

import { CanvasHeadlineInterface, CanvasHeadlineValuesInterface } from '../interfaces/sidebarInterfaces'

const CanvasHeadlineContext = createContext({} as CanvasHeadlineInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasHeadlineValues, setCanvasHeadlineValues] = useState<CanvasHeadlineValuesInterface>({
    content: "",
    position: {
      x: "",
      y: ""
    }
  })

  const canvasHeadline = {
    canvasHeadlineValues,
    setCanvasHeadlineValues
  }

  return (
    <CanvasHeadlineContext.Provider value={canvasHeadline}>
      {props.children}
    </CanvasHeadlineContext.Provider>
  );
};

export const CanvasHeadlineContextProvider = Provider;
export const CanvasHeadlineContextValues = CanvasHeadlineContext; 