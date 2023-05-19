import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../../App";

describe("SideBar component", () => {
  it('renders a container with test id "Sidebar"', () => {
    render(<App />);
    expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
  });
});
