import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { CanvasPreviewContextProvider } from '../../contexts/CanvasPreviewContext';
import { CanvasLogo } from '../CanvasLogo/CanvasLogo';

const MockCanvasLogo = () => {
  return (
    <CanvasPreviewContextProvider>
      <CanvasLogo />
    </CanvasPreviewContextProvider>
  )
}

describe('CanvasLogo.tsx tests', () => {
  it('should be able to set logo title', () => {
    render(<MockCanvasLogo />);
    const textAreaElement = screen.getByPlaceholderText(/Leave a comment here/i) as HTMLInputElement;
    fireEvent.change(textAreaElement, { target: { value: "Text for the logo title" } })
    expect(textAreaElement.value).toBe("Text for the logo title");
  });
  it('should be able to select logo type', () => {
    render(<MockCanvasLogo />);
    const selectElement = screen.getByTitle(/CanvasLogoOptions/i) as HTMLInputElement;
    fireEvent.change(selectElement, { target: { value: "KeitaroFullColorLogo" } })
    expect(selectElement.value).toBe("KeitaroFullColorLogo");
  });
});