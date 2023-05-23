import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SideBar } from "../SideBar/SideBar";
import { CanvasPreviewContextProvider } from "../../contexts/CanvasPreviewContext";

const MockSideBar = () => {
  return (
    <CanvasPreviewContextProvider>
      <SideBar />
    </CanvasPreviewContextProvider>
  );
};

describe("SideBar.tsx tests", () => {
  it("should render a component with test-id canvasHeadline", () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvasHeadline")).toBeInTheDocument();
  });

  it("should render a component with test-id canvasLogo", () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvasLogo")).toBeInTheDocument();
  });

  it("should render a component with test-id canvasBackground", () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvasBackground")).toBeInTheDocument();
  });

  it("should render a component with test-id canvasIcon", () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvasIcon")).toBeInTheDocument();
  });

  it("should render a component with test-id canvasBorder", () => {
    render(<MockSideBar />);
    expect(screen.getByTestId("canvasBorder")).toBeInTheDocument();
  });

  it("should render an element with alt text Keitaro Logo", () => {
    render(<MockSideBar />);
    expect(screen.getByAltText("Keitaro Logo")).toBeInTheDocument();
  });
});
