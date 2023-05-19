import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SideBar } from '../SideBar/SideBar';
import { CanvasPreviewContextProvider } from '../../contexts/CanvasPreviewContext';

describe('SideBar.tsx tests', () => {
  it('should render a component with test-id "canvas-headline"', () => {
    render(
      <CanvasPreviewContextProvider>
        <SideBar />
      </CanvasPreviewContextProvider>);
    expect(screen.getByTestId("canvas-headline")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-logo"', () => {
    render(
      <CanvasPreviewContextProvider>
        <SideBar />
      </CanvasPreviewContextProvider>
    );
    expect(screen.getByTestId("canvas-logo")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-background"', () => {
    render(
      <CanvasPreviewContextProvider>
        <SideBar />
      </CanvasPreviewContextProvider>);
    expect(screen.getByTestId("canvas-background")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-icon"', () => {
    render(
      <CanvasPreviewContextProvider>
        <SideBar />
      </CanvasPreviewContextProvider>);
    expect(screen.getByTestId("canvas-icon")).toBeInTheDocument();
  });
  it('should render a component with test-id "canvas-border"', () => {
    render(
      <CanvasPreviewContextProvider >
        <SideBar />
      </CanvasPreviewContextProvider >);

    expect(screen.getByTestId("canvas-border")).toBeInTheDocument();
  });
  it('should render an element with alt text Keitaro Logo', () => {
    render(
      <CanvasPreviewContextProvider >
        <SideBar />
      </CanvasPreviewContextProvider >);

    expect(screen.getByAltText("Keitaro Logo")).toBeInTheDocument();
  });
});
