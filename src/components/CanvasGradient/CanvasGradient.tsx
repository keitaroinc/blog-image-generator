import React, { useState } from 'react';
import plusIcon from '../../assets/svg/plus.svg';
import trashIcon from '../../assets/svg/trash.svg';
import { CanvasGradientContextValues } from '../../contexts/GradientContext';
import { CanvasGradientValuesInterface } from "../../interfaces/sidebarInterfaces"

interface GradientComponentProps {
};

const gradientOptions = [
  { value: 'linear', label: 'Linear' },
  { value: 'radial', label: 'Radial' },
  { value: 'conic', label: 'Conic' },
];

const blendingMode = [
  { value: 'normal', label: 'Normal' },
  { value: 'multiply', label: 'Multiply' },
  { value: 'screen', label: 'Screen' },
  { value: 'overlay', label: 'Overlay' },
  { value: 'darken', label: 'Darken' },
  { value: 'lighten', label: 'Lighten' },
  { value: 'color', label: 'Color' },
];

export const CanvasGradient: React.FC<GradientComponentProps> = (props) => {
  const { canvasGradientValues, setCanvasGradientValues } = React.useContext(
    CanvasGradientContextValues
  );
  const [gradients, setGradients] = useState<CanvasGradientValuesInterface[]>([canvasGradientValues]);
  const handleEditTypeOfGradient = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    typeOfGradientEdit: any
  ) => {
    const newGradients = [...gradients];
    switch (typeOfGradientEdit) {
      case 'startColor':
        newGradients[index].startColor = event.target.value;
        break;
      case 'endColor':
        newGradients[index].endColor = event.target.value;
        break;
      case 'endColorPercentage':
        newGradients[index].endColorPercentage = event.target.value;
        break;
      case 'startColorPercentage':
        newGradients[index].startColorPercentage = event.target.value;
        break;
      case 'scale':
        newGradients[index].scale = event.target.value;
        break;
      case 'rotation':
        newGradients[index].rotation = event.target.value;
        break;
      case 'gradientType':
        newGradients[index].gradientType = event.target.value;
        break;
      case 'blendingMode':
        newGradients[index].blendingMode = event.target.value;
        break;
      default:
        break;
    }
    setGradients(newGradients);
    setCanvasGradientValues(newGradients);
  };

  const handleAddGradient = () => {
    if (gradients.length < 3) {
      setCanvasGradientValues([
        ...gradients,
        {
          startColor: '#ff0000',
          startColorPercentage: '50',
          endColor: '#00ff00',
          endColorPercentage: '50',
          scale: '10',
          rotation: '10',
          gradientType: 'linear',
          blendingMode: "overlay"
        },
      ]);
      setGradients([
        ...gradients,
        {
          startColor: '#ff0000',
          startColorPercentage: '50',
          endColor: '#00ff00',
          endColorPercentage: '50',
          scale: '10',
          rotation: '10',
          gradientType: 'linear',
          blendingMode: "overlay"
        },
      ]);
    }
  };

  const handleRemoveGradient = (indexToRemove: number) => {
    const newGradients = gradients.filter(
      (_, index) => index !== indexToRemove
    );
    setCanvasGradientValues(newGradients);
    setGradients(newGradients)
  };

  return (
    <div className="bg-gray-light py-2 px-0">
      <div className="bg-gray-medium d-flex justify-content-between align-items-center py-2 px-3">
        <h1 className="fs-6 fw-bold mb-0">Gradient</h1>
        <button
          className="btn btn-success"
          onClick={handleAddGradient}
          disabled={gradients.length === 3}
        >
          <img src={plusIcon} alt="add-gradient" />
        </button>
      </div>

      {gradients.length > 0 &&
        (gradients || []).map((gradient, index) => {
          return (
            <div className="border-bottom px-3 mt-3" key={index}>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <input
                    type="color"
                    className="form-control form-control-color"
                    min="0"
                    max="100"
                    value={gradient.startColor}
                    onChange={(event) =>
                      handleEditTypeOfGradient(event, index, 'startColor')
                    }
                  />

                  <input
                    type="number"
                    className="form-control ms-2"
                    id="floatingInputGroup1"
                    placeholder="50%"
                    min="0"
                    max="100"
                    defaultValue={gradient.startColorPercentage}
                    onChange={(event) =>
                      handleEditTypeOfGradient(
                        event,
                        index,
                        'startColorPercentage'
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
                    className="form-control me-1"
                    placeholder="50%"
                    id="InputGroup"
                    min="0"
                    max="100"
                    defaultValue={gradient.endColorPercentage}
                    onChange={(event) =>
                      handleEditTypeOfGradient(
                        event,
                        index,
                        'endColorPercentage'
                      )
                    }
                  />
                  <input
                    type="color"
                    className="form-control form-control-color"
                    value={gradient.endColor}
                    onChange={(event) =>
                      handleEditTypeOfGradient(event, index, 'endColor')
                    }
                  />
                </div>
              </div>
              <div className="py-4">
                <label htmlFor={`scale${index}`} className="form-label">
                  Scale ({gradient.scale}%)
                </label>
                <input
                  type="range"
                  className="form-range custom-range"
                  min="0"
                  max="100"
                  id={`scale${index}`}
                  value={gradient.scale}
                  onChange={(event) =>
                    handleEditTypeOfGradient(event, index, 'scale')
                  }
                />
              </div>
              <div className="py-4">
                <label htmlFor={`rotation${index}`} className="form-label">
                  Rotation ({gradient.rotation} deg)
                </label>
                <input
                  type="range"
                  className="form-range custom-range"
                  min="0"
                  max="100"
                  id={`rotation${index}`}
                  value={gradient.rotation}
                  onChange={(event) =>
                    handleEditTypeOfGradient(event, index, 'rotation')
                  }
                />
              </div>
              <div className="py-3">
                <select
                  defaultValue={gradient.gradientType}
                  onChange={(event: any) =>
                    handleEditTypeOfGradient(event, index, 'gradientType')
                  }
                  className="form-select"
                >
                  {gradientOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="py-3">
                <select
                  defaultValue={gradient.blendingMode}
                  onChange={(event: any) =>
                    handleEditTypeOfGradient(event, index, 'blendingMode')
                  }
                  className="form-select"
                >
                  {blendingMode.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};
