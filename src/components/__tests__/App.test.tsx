import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../../App";

describe("App.tsx tests", () => {
  it("should render a component with test-id SideBar", () => {
    render(<App />);
    expect(screen.getByTestId("SideBar")).toBeInTheDocument();
  });

  it("should render a component with test-id CanvasWrapper", () => {
    render(<App />);
    expect(screen.getByTestId("CanvasWrapper")).toBeInTheDocument();
  });

  it("should render updated text from headline textarea on the canvas", () => {
    render(<App />);
    const textAreaElement = screen.getByTestId(
      /headlineTextarea/i
    ) as HTMLInputElement;
    fireEvent.change(textAreaElement, {
      target: { value: "Headline text was changed" },
    });
    const headlinePreviewElement = screen.getByTestId(/canvasHeadlineTitle/i);
    expect(headlinePreviewElement).toHaveTextContent(
      "Headline text was changed"
    );
  });

  it("should change headline text color on the canvas", () => {
    render(<App />);
    const colorPickerElement = screen.getByTitle(
      /Choose your headline text color/i
    ) as HTMLInputElement;
    fireEvent.change(colorPickerElement, {
      target: { value: "#f4f4f4" },
    });
    const headlinePreviewElement = screen.getByTestId(/canvasHeadlineTitle/i);
    const styles = window.getComputedStyle(headlinePreviewElement);
    expect(styles.color).toBe("rgb(244, 244, 244)");
  });
});
