import React, { Fragment } from "react";
import plusIcon from "../../assets/svg/plus.svg";
import trashIcon from "../../assets/svg/trash.svg";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";

interface GradientComponentProps { }

const gradientOptions = [
  { value: "linear-gradient", label: "Linear" },
  { value: "radial-gradient", label: "Radial" },
  { value: "conic-gradient", label: "Conic" },
];

const blendingMode = [
  { value: "normal", label: "Normal" },
  { value: "multiply", label: "Multiply" },
  { value: "screen", label: "Screen" },
  { value: "overlay", label: "Overlay" },
  { value: "darken", label: "Darken" },
  { value: "lighten", label: "Lighten" },
  { value: "color-dodge", label: "Color Dodge" },
  { value: "color-burn", label: "Color Burn" },
  { value: "hard-light", label: "Hard Light" },
  { value: "soft-light", label: "Soft Light" },
  { value: "difference", label: "Difference" },
  { value: "exclusion", label: "Exclusion" },
  { value: "hue", label: "Hue" },
  { value: "saturation", label: "Saturation" },
  { value: "color", label: "Color" },
  { value: "luminosity", label: "Luminosity" },
  { value: "inherit", label: "Inherit" },
  { value: "initial", label: "Initial" },
  { value: "revert", label: "Revert" },
  { value: "revert-layer", label: "Revert Layer" },
  { value: "unset", label: "Unset" },
];

export const CanvasGradient: React.FC<GradientComponentProps> = (props) => {
  const { canvasGradientValues, setCanvasGradientValues } = React.useContext(
    CanvasPreviewContextValues
  );

  const handleEditTypeOfGradient = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    typeOfGradientEdit: any
  ) => {
    const newGradients = [...canvasGradientValues];
    switch (typeOfGradientEdit) {
      case "startColor":
        newGradients[index].startColor = event.target.value;
        break;
      case "endColor":
        newGradients[index].endColor = event.target.value;
        break;
      case "endColorPercentage":
        newGradients[index].endColorPercentage = event.target.value;
        break;
      case "startColorPercentage":
        newGradients[index].startColorPercentage = event.target.value;
        break;
      case "scale":
        newGradients[index].scale = event.target.value;
        break;
      case "rotation":
        newGradients[index].rotation = event.target.value;
        break;
      case "opacity":
        newGradients[index].opacity = event.target.value;
        break;
      case "gradientType":
        newGradients[index].gradientType = event.target.value;
        break;
      case "blendingMode":
        newGradients[index].blendingMode = event.target.value;
        break;
      default:
        break;
    }
    setCanvasGradientValues(newGradients);
  };

  const handleAddGradient = () => {
    setCanvasGradientValues([
      ...canvasGradientValues,
      {
        startColor: "#28a745",
        startColorPercentage: "0",
        endColor: "#20c997",
        endColorPercentage: "100",
        scale: "100",
        rotation: "10",
        gradientType: "linear-gradient",
        blendingMode: "normal",
        opacity: "50",
      },
    ]);
  };

  const handleRemoveGradient = (indexToRemove: number) => {
    const newGradients = canvasGradientValues.filter(
      (_, index) => index !== indexToRemove
    );
    setCanvasGradientValues(newGradients);
  };

  return (
    <Fragment>
      <div className="list-group-item bg-gray-medium d-flex justify-content-between align-items-center">
        <h1 className="h6 mb-0">Gradient</h1>
        <button className="btn btn-success" onClick={handleAddGradient}>
          <img src={plusIcon} alt="add-gradient" />
        </button>
      </div>
      {canvasGradientValues.length > 0 ? (
        (canvasGradientValues || []).map((gradient, index) => {
          return (
            <div className="list-group-item p-3" key={index}>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <input
                    type="color"
                    className="form-control form-control-color"
                    min="0"
                    max="100"
                    value={gradient.startColor}
                    onChange={(event) =>
                      handleEditTypeOfGradient(event, index, "startColor")
                    }
                    title="Choose your color"
                  />
                  <input
                    type="number"
                    className="form-control ms-2"
                    id="floatingInputGroup1"
                    placeholder="50"
                    min="0"
                    max="100"
                    pattern="[0-9]*"
                    defaultValue={gradient.startColorPercentage}
                    onChange={(event) =>
                      handleEditTypeOfGradient(
                        event,
                        index,
                        "startColorPercentage"
                      )
                    }
                  />
                </div>
                <button
                  className="mx-2 btn btn-danger"
                  onClick={() => handleRemoveGradient(index)}
                >
                  <img src={trashIcon} alt="remove-gradient" />
                </button>
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control me-2"
                    placeholder="50"
                    id="InputGroup"
                    min="0"
                    max="100"
                    pattern="[0-9]*"
                    defaultValue={gradient.endColorPercentage}
                    onChange={(event) =>
                      handleEditTypeOfGradient(
                        event,
                        index,
                        "endColorPercentage"
                      )
                    }
                  />
                  <input
                    type="color"
                    className="form-control form-control-color"
                    value={gradient.endColor}
                    onChange={(event) =>
                      handleEditTypeOfGradient(event, index, "endColor")
                    }
                    title="Choose your color"
                  />
                </div>
              </div>
              <div className="py-4">
                <label htmlFor={`scale${index}`} className="form-label m-3">
                  Scale ({gradient.scale}%)
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="600"
                  id={`scale${index}`}
                  value={gradient.scale}
                  onChange={(event) =>
                    handleEditTypeOfGradient(event, index, "scale")
                  }
                />
              </div>
              <div className="py-2">
                <label htmlFor={`rotation${index}`} className="form-label m-3">
                  Rotation ({gradient.rotation} deg)
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="360"
                  id={`rotation${index}`}
                  value={gradient.rotation}
                  onChange={(event) =>
                    handleEditTypeOfGradient(event, index, "rotation")
                  }
                />
              </div>
              <div className="py-2">
                <label htmlFor={`opacity${index}`} className="form-label m-3">
                  Opacity ({gradient.opacity}%)
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  id={`opacity${index}`}
                  value={gradient.opacity}
                  onChange={(event) =>
                    handleEditTypeOfGradient(event, index, "opacity")
                  }
                />
              </div>
              <div className="my-3">
                <div className="form-floating">
                  <select
                    title="GradientOptions"
                    defaultValue={gradient.gradientType}
                    onChange={(event: any) =>
                      handleEditTypeOfGradient(event, index, "gradientType")
                    }
                    className="form-select"
                    aria-label="Gradient Type"
                  >
                    {gradientOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelect">Gradient Type</label>
                </div>
              </div>
              <div className="mt-3">
                <div className="form-floating">
                  <select
                    title="BlendingMode"
                    defaultValue={gradient.blendingMode}
                    onChange={(event: any) =>
                      handleEditTypeOfGradient(event, index, "blendingMode")
                    }
                    className="form-select"
                    aria-label="Blending Mode"
                  >
                    {blendingMode.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelect">Blending Mode</label>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="py-5 mb-0 text-muted text-center">
          No gradients added yet.
        </p>
      )}
    </Fragment>
  );
};
