import React from "react"

type GradientComponentProps = {
  canvasGradientValues: Array<any>,
}

export const GradientComponent: React.FC<GradientComponentProps> = ({ canvasGradientValues }) => {
  return <React.Fragment>
    {canvasGradientValues.map((gradient, index) => {
      const gradientRotation = gradient.gradientType === "linear-gradient" ? `${gradient.rotation}deg` : "circle"
      return <div key={index} className="gradient-layer" style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        background: `${gradient.gradientType}(${gradientRotation},${gradient.startColor} ${gradient.startColorPercentage}%, ${gradient.endColor} ${gradient.endColorPercentage}%)`,
        transform: `scale(${gradient.scale}%)`,
        mixBlendMode: gradient.blendingMode,
        opacity: `${gradient.opacity}%`
      }}>
      </div>
    })}
  </React.Fragment>
}