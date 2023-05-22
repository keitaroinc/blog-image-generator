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
    addGradient(2)
    const selectElements = screen.getAllByTitle(/GradientOptions/i) as HTMLInputElement[];
    selectElements.forEach(element => {
      fireEvent.change(element, { target: { value: "linear-gradient" } })
      expect(element.value).toBe("linear-gradient");
    })
  });
  it('should be able to select blending mode', () => {
    render(<MockCanvasGradient />);
    addGradient(2)
    const selectElements = screen.getAllByTitle(/BlendingMode/i) as HTMLInputElement[];
    selectElements.forEach(element => {
      fireEvent.change(element, { target: { value: "luminosity" } })
      expect(element.value).toBe("luminosity");
    })
  });
});