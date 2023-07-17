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

  describe("Headline inegrated tests", () => {
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
        /Headline Color/i
      ) as HTMLInputElement;
      fireEvent.change(colorPickerElement, {
        target: { value: "#f4f4f4" },
      });
      const headlinePreviewElement = screen.getByTestId(/canvasHeadlineTitle/i);
      const styles = window.getComputedStyle(headlinePreviewElement);
      expect(styles.color).toBe("rgb(244, 244, 244)");
    });

    it("should change healine font size", () => {
      render(<App />);
      const rangeElement = screen.getByTitle(
        /Headline Size/i
      ) as HTMLInputElement;
      fireEvent.change(rangeElement, { target: { value: "5" } });
      const headlinePreviewElement = screen.getByTestId(/canvasHeadlineTitle/i);
      const styles = window.getComputedStyle(headlinePreviewElement);
      expect(styles.fontSize).toBe("5em");
    });

    it("should change headline horizontal position", () => {
      render(<App />);
      const rangeElement = screen.getByTitle(
        /Headline Horizontal Position/i
      ) as HTMLInputElement;
      fireEvent.change(rangeElement, { target: { value: "5" } });
      const headlinePreviewElement = screen.getByTestId(/canvasHeadlineTitle/i);
      const styles = window.getComputedStyle(headlinePreviewElement);
      expect(styles.gridColumnStart).toBe("5");
    });

    it("should change headline vertical position", () => {
      render(<App />);
      const rangeElement = screen.getByTitle(
        /Headline Vertical Position/i
      ) as HTMLInputElement;
      fireEvent.change(rangeElement, { target: { value: "5" } });
      const headlinePreviewElement = screen.getByTestId(/canvasHeadlineTitle/i);
      const styles = window.getComputedStyle(headlinePreviewElement);
      expect(styles.gridRowStart).toBe("5");
    });
  });

  describe("CanvasBorder integrated tests", () => {
    it("should change border width", () => {
      render(<App />);
      const rangeElement = screen.getByTitle(
        /Border Width/i
      ) as HTMLInputElement;
      fireEvent.change(rangeElement, { target: { value: "5" } });
      const canvasPreviewWrapper = screen.getByTestId(/canvasPreviewWrapper/i);
      const styles = window.getComputedStyle(canvasPreviewWrapper);
      expect(styles.borderWidth).toBe("5em");
    });
  });

  describe("KeitaroLogo integrated tests", () => {
    it("should change logo horizontal position", () => {
      render(<App />);
      const rangeElement = screen.getByTitle(
        /Logo Horizontal Position/i
      ) as HTMLInputElement;
      fireEvent.change(rangeElement, { target: { value: "5" } });
      const logoPreviewElement = screen.getByTestId(/canvasLogoPreview/i);
      const styles = window.getComputedStyle(logoPreviewElement);
      expect(styles.gridColumnStart).toBe("5");
    });

    it("should change logo vertical position", () => {
      render(<App />);
      const rangeElement = screen.getByTitle(
        /Logo Vertical Position/i
      ) as HTMLInputElement;
      fireEvent.change(rangeElement, { target: { value: "5" } });
      const logoPreviewElement = screen.getByTestId(/canvasLogoPreview/i);
      const styles = window.getComputedStyle(logoPreviewElement);
      expect(styles.gridRowStart).toBe("5");
    });
  });
});
