import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SideBar } from '../SideBar/SideBar';
import { CanvasPreviewContextProvider } from '../../contexts/CanvasPreviewContext';

const MockSideBar = () => {
  return (
    <CanvasPreviewContextProvider>
      <SideBar />
    </CanvasPreviewContextProvider>
  );
}

describe('SideBar.tsx tests', () => {
  it('should render a component with test-id "canvas-headline"', () => {
    render(<MockSideBar />)
    expect(screen.getByTestId("canvas-headline")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-logo"', () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvas-logo")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-background"', () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvas-background")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-icon"', () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvas-icon")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-border"', () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvas-border")).toBeInTheDocument();
  });
  it('should render an element with alt text Keitaro Logo', () => {
    render(<MockSideBar />);
    expect(screen.getByAltText("Keitaro Logo")).toBeInTheDocument();
  });
});
