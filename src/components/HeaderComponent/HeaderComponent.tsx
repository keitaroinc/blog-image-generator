import React from "react";

type HeaderComponentProps = {
  children: any;
};

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
}) => {
  return (
    <div className="list-group-item bg-secondary-subtle hstack justify-content-between">
      {children}
    </div>
  );
};
