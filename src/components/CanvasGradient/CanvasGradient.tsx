import React, { Fragment } from "react";
import { CanvasPreviewContextValues } from "../../contexts/CanvasPreviewContext";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { Heading } from "../Heading/Heading";
import { AddGradient } from "../AddGradient/AddGradient";
import { RangeControl } from "../RangeControl/RangeControl";

interface GradientComponentProps {}

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
        startColor: "#8cc04b",
        startColorPercentage: "0",
        endColor: "#28a745",
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
      <HeaderComponent>
        <Heading title="Gradient" />
        <AddGradient onClick={handleAddGradient} />
      </HeaderComponent>
      {canvasGradientValues.length > 0 ? (
        (canvasGradientValues || []).map((gradient, index) => {
          return (
            <div
              className="list-group-item p-3"
              key={index}
              data-testid={`canvasGradientOption-${index}`}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <input
                    type="color"
                    className="form-control form-control-color"
                    data-testid={`gradientStartColorType-${index}`}
                    value={gradient.startColor}
                    onChange={(event) =>
                      handleEditTypeOfGradient(event, index, "startColor")
                    }
                    title="Change gradient start color"
                  />
                  <input
                    type="number"
                    className="form-control ms-2"
                    placeholder="50"
                    data-testid={`gradientStartColorPercentage-${index}`}
                    min="0"
                    max="100"
                    pattern="[0-9]*"
                    value={gradient.startColorPercentage}
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
                  data-testid="delete-gradient-option"
                  className="mx-2 btn btn-danger"
                  title="Delete Gradient"
                  onClick={() => handleRemoveGradient(index)}
                >
                  <i className="bi bi-trash" title="Delete Gradient"></i>
                </button>
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control me-2"
                    data-testid={`gradientEndColorPercentage-${index}`}
                    placeholder="50"
                    min="0"
                    max="100"
                    pattern="[0-9]*"
                    value={gradient.endColorPercentage}
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
                    data-testid={`gradientEndColorType-${index}`}
                    value={gradient.endColor}
                    onChange={(event) =>
                      handleEditTypeOfGradient(event, index, "endColor")
                    }
                    title="Change gradient end color"
                  />
                </div>
              </div>
              <div className="py-4">
                <RangeControl
                  id={`scale${index}`}
                  title="Gradient Scale Range"
                  min={0}
                  max={600}
                  step="1"
                  value={gradient.scale}
                  onChange={(event: any) =>
                    handleEditTypeOfGradient(event, index, "scale")
                  }
                  labelTitle={"Scale"}
                  labelValue={gradient.scale}
                  labelValueType="%"
                />
              </div>
              <div className="py-2">
                <RangeControl
                  id={`rotation${index}`}
                  title="Gradient Rotation Range"
                  min={0}
                  max={360}
                  step="1"
                  value={gradient.rotation}
                  onChange={(event: any) =>
                    handleEditTypeOfGradient(event, index, "rotation")
                  }
                  labelTitle={"Rotation"}
                  labelValue={gradient.rotation}
                  labelValueType="deg"
                />
              </div>
              <div className="py-2">
                <RangeControl
                  id={`opacity${index}`}
                  title="Gradient Opacity Range"
                  min={0}
                  max={100}
                  step="1"
                  value={gradient.opacity}
                  onChange={(event: any) =>
                    handleEditTypeOfGradient(event, index, "opacity")
                  }
                  labelTitle={"Opacity"}
                  labelValue={gradient.opacity}
                  labelValueType="%"
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
