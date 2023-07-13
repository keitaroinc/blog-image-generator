import React, { useState } from "react";

interface DialogProps {
  children: any;
  id: string;
  title: string;
}

export const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  id,
  title,
}) => {
  return (
    <div className={`modal fade`} id={id} tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
