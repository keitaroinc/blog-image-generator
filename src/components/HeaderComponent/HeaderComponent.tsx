import React from "react";

type HeaderComponentProps = {
  children: any;
};

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
}) => {
  return (
    <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
      {children}
    </div>
  );
};
