import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { App } from "../../App";

describe('App.tsx tests', () => {

  it("should render a component with test-id SideBar", () => {
    render(<App />);
    expect(screen.getByTestId("SideBar")).toBeInTheDocument();
  });

  it("should render a component with test-id CanvasWrapper", () => {
    render(<App />);
    expect(screen.getByTestId("CanvasWrapper")).toBeInTheDocument();
  });

});
