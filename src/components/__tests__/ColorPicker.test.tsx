import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ColorPicker } from "../ColorPicker/ColorPicker";

describe("ColorPicker.tsx tests", () => {

  it("should render a range input", () => {
    render(<ColorPicker onChange={jest.fn} />)
    expect(screen.getByTestId(/colorPicker/i) as HTMLInputElement).toBeInTheDocument()
  })

  it("should be able to change the color", () => {
    let value = "#000000"
    const onChange = jest.fn((event) => {
      value = event.target.value
    });

    render(<ColorPicker onChange={onChange} />);

    const colorPickerElement = screen.getByTestId(/colorPicker/i) as HTMLInputElement;
    fireEvent.change(colorPickerElement, { target: { value: "#ffffff" } });
    expect(value).toBe("#ffffff");
  });

});