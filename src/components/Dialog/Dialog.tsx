import React, { useState } from "react";

interface DialogProps {
  children: any;
  dialogVisibility: boolean;
  className?: string;
}

export const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  dialogVisibility,
  className,
}) => {
  return (
    <dialog
      open={dialogVisibility}
      className={`border border-1 rounded-2 z-3 overflow-hidden ${className}`}
    >
      {children}
    </dialog>
  );
};
