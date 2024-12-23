import React from "react";

interface DialogProps {
  children: any;
  id: string;
  title: string;
  icon: string;
}

export const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  id,
  title,
  icon,
}) => {
  return (
    <div
      className={`modal modal-lg fade`}
      id={id}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <i className={`bi bi-${icon} me-2`} title={`${title} icon`}></i>
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
