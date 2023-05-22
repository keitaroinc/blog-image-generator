import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { CanvasGradient } from '../CanvasGradient/CanvasGradient';
import { CanvasPreviewContextProvider } from '../../contexts/CanvasPreviewContext';

const MockCanvasGradient = () => {
  return (
    <CanvasPreviewContextProvider>
      <CanvasGradient />
    </CanvasPreviewContextProvider>
  )
}

const addGradient = (numberOfGradients: number) => {
  const buttonElement = screen.getByTestId(/addGradient/i) as HTMLButtonElement;
  for (let i = 1; i <= numberOfGradients; i++) {
    fireEvent.click(buttonElement)
  }
}

describe('CanvasGradient.tsx tests', () => {
  it('should renderder AddGradient button', () => {
    render(<MockCanvasGradient />);
    const buttonElement = screen.getByTestId(/addGradient/i) as HTMLButtonElement;
    expect(buttonElement).toBeInTheDocument();
  });
  it('should add or delete gradient option on button click', () => {
    render(<MockCanvasGradient />);
    addGradient(3);
    const gradientOptionElements = screen.getAllByTestId(/canvasGradientOption/i) as HTMLDivElement[];
    expect(gradientOptionElements).toHaveLength(3);
    const deleteButtonElement = screen.getAllByTestId(/delete-gradient-option/i) as HTMLButtonElement[];
    fireEvent.click(deleteButtonElement[0]);
    expect(screen.getAllByTestId(/canvasGradientOption/i)).toHaveLength(2);

  })
  it('should be able to select gradient type', () => {
    render(<MockCanvasGradient />);
    addGradient(2);
    const selectElements = screen.getAllByTitle(/GradientOptions/i) as HTMLInputElement[];
    selectElements.forEach(element => {
      fireEvent.change(element, { target: { value: "linear-gradient" } });
      expect(element.value).toBe("linear-gradient");
    })
  });
  it('should be able to select blending mode', () => {
    render(<MockCanvasGradient />);
    addGradient(2);
    const selectElements = screen.getAllByTitle(/BlendingMode/i) as HTMLInputElement[];
    selectElements.forEach(element => {
      fireEvent.change(element, { target: { value: "luminosity" } });
      expect(element.value).toBe("luminosity");
    })
  });
  it('should render start color pick input and change its value', () => {
    render(<MockCanvasGradient />);
    addGradient(2);
    const gradientOptionElements = screen.getAllByTestId(/gradientStartColorType/i) as HTMLInputElement[];
    expect(gradientOptionElements).toHaveLength(2);
    gradientOptionElements.forEach(element => {
      fireEvent.change(element, { target: { value: "#ffffff" } });
      expect(element.value).toBe("#ffffff")
    })
  });
  it('should render end color pick input and change its value', () => {
    render(<MockCanvasGradient />);
    addGradient(2);
    const gradientOptionElements = screen.getAllByTestId(/gradientEndColorType/i) as HTMLInputElement[];
    expect(gradientOptionElements).toHaveLength(2);
    gradientOptionElements.forEach(element => {
      fireEvent.change(element, { target: { value: "#000000" } });
      expect(element.value).toBe("#000000")
    })
  });
  it('should render start color percentage input and change its value', () => {
    render(<MockCanvasGradient />);
    addGradient(2);
    const gradientOptionElements = screen.getAllByTestId(/gradientStartColorPercentage/i) as HTMLInputElement[];
    expect(gradientOptionElements).toHaveLength(2);
    gradientOptionElements.forEach(element => {
      fireEvent.change(element, { target: { value: "20" } });
      expect(element.value).toBe("20")
    })
  });
  it('should render end color percentage input and change its value', () => {
    render(<MockCanvasGradient />);
    addGradient(2);
    const gradientOptionElements = screen.getAllByTestId(/gradientEndColorPercentage/i) as HTMLInputElement[];
    expect(gradientOptionElements).toHaveLength(2);
    gradientOptionElements.forEach(element => {
      fireEvent.change(element, { target: { value: "20" } });
      expect(element.value).toBe("20")
    })
  });
});