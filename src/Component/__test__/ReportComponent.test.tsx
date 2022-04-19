import React from "react";
import { render, screen } from "@testing-library/react";
import ReportComponent from "../ReportComponent";

test("should render component correctly", () => {
  render(<ReportComponent />);
});

test("Chart should be available in report page", () => {
  render(<ReportComponent />);
  const chart = screen.getByTestId(/chart/i);
  expect(chart).toBeInTheDocument();
});

// test("Should Navigate to report", () => {
//   render(<StepperActions />);
//   fireEvent.click(screen.getByTestId(/next/i));
//   expect(mockedUsedNavigate).toHaveBeenCalledWith("/report");
// });
