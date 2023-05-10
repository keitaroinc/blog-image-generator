import React from "react";

type GradientComponentProps = {
  canvasGradientValues: Array<any>;
};

export const GradientComponent: React.FC<GradientComponentProps> = ({
  canvasGradientValues,
}) => {
  return (
    <React.Fragment>
      {canvasGradientValues.map((gradient, index) => {
        let gradientRotation = ``;
        switch (gradient.gradientType) {
          case "linear-gradient":
            gradientRotation = `${gradient.rotation}deg`;
            break;
          case "radial-gradient":
            gradientRotation = "circle";
            break;
          case "conic-gradient":
            gradientRotation = `from ${gradient.rotation}deg`;
            break;
          default:
        }
        return (
          <div
            key={index}
            className="gradient-layer"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: `${gradient.gradientType}(${gradientRotation},${gradient.startColor} ${gradient.startColorPercentage}%, ${gradient.endColor} ${gradient.endColorPercentage}%)`,
              transform: `scale(${gradient.scale}%)`,
              mixBlendMode: gradient.blendingMode,
              opacity: `${gradient.opacity}%`,
            }}
          ></div>
        );
      })}
    </React.Fragment>
  );
};
