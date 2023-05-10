import React from "react";

import plusIcon from "../../assets/svg/plus.svg";

type HeaderComponentProps = {
  title: string;
  inputId?: string;
  inputDefaultVaule?: string;
  inputTitle?: string;
  onChange: Function;
  onClick?: any;
  headerType?: string;
};

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  inputDefaultVaule,
  inputId,
  inputTitle,
  onChange,
  onClick,
  headerType,
}) => {
  return (
    <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
      <h1 className="h6 mb-0">{title}</h1>
      {headerType === "gradientHeader" ? (
        <button className="btn btn-success" onClick={onClick}>
          <img src={plusIcon} alt="add-gradient" />
        </button>
      ) : (
        <input
          type="color"
          className="form-control form-control-color"
          id={inputId}
          defaultValue={inputDefaultVaule}
          title={inputTitle}
          onChange={(e) => onChange(e)}
        ></input>
      )}
    </div>
  );
};
