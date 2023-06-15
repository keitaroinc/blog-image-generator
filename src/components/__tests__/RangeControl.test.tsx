import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RangeControl } from "../RangeControl/RangeControl";

describe("RangeControl.tsx tests", () => {
  it("should render a range input", () => {
    render(
      <RangeControl
        min={0}
        max={12}
        step={1}
        title="Range Slider"
        id="range-slider"
        value={4}
        onChange={jest.fn}
        className="range-slider"
        labelTitle="Range Slider"
        labelValue="Value"
        labelValueType="%"
      />
    );
    expect(
      screen.getByTestId(/rangeSliderInput/i) as HTMLInputElement
    ).toBeInTheDocument();
  });

  it("should be able to change the range value", () => {
    let value = 50;
    const onChange = jest.fn((event) => {
      value = Number(event.target.value);
    });

    render(
      <RangeControl
        min={0}
        max={12}
        step={1}
        id="range-slider"
        title="Range Slider"
        value={value}
        onChange={onChange}
        className="range-slider"
        labelTitle="Range Slider"
        labelValue="Value"
        labelValueType="%"
      />
    );
    const rangeElement = screen.getByTestId(
      /rangeSliderInput/i
    ) as HTMLInputElement;
    fireEvent.click(rangeElement);
    fireEvent.change(rangeElement, { target: { value: "7" } });
    expect(value).toBe(7);
  });
});
