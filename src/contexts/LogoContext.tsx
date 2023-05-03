import React, { createContext, useState } from 'react';

import { CanvasLogoInterface, CanvasLogoValuesInterface } from '../interfaces/sidebarInterfaces'

import keitaroFullColorLogo from "../assets/svg/keitaro-logo-full-color.svg"

const CanvasLogoContext = createContext({} as CanvasLogoInterface);

export const Provider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [canvasLogoValues, setCanvasLogoValues] = useState<CanvasLogoValuesInterface>({
    src: keitaroFullColorLogo,
    position: {
      x: "",
      y: ""
    }
  })

  const canvasLogo = {
    canvasLogoValues,
    setCanvasLogoValues
  }

  return (
    <CanvasLogoContext.Provider value={canvasLogo}>
      {props.children}
    </CanvasLogoContext.Provider>
  );
};

export const CanvasLogoContextProvider = Provider;
export const CanvasLogoContextValues = CanvasLogoContext; 