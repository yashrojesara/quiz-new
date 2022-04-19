import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Registration from "../Registration";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("should render component correctly", () => {
  render(<Registration />);
});

test("initially next button should be disabled", () => {
  render(<Registration />);
  const nextButton = screen.getByTestId(/next/i);
  expect(nextButton).toBeDisabled();
});

test("after enter user name value next button must be enabled", () => {
  render(<Registration />);
  const inputField = screen.getByTestId(/input/i);
  fireEvent.change(inputField, {
    target: { value: "Test" },
  });
  expect(screen.getByTestId(/next/i)).toBeEnabled();
});

test("Should Navigate to quiz page with user data", () => {
  render(<Registration />);
  const inputField = screen.getByTestId(/input/i);
  fireEvent.change(inputField, {
    target: { value: "Test" },
  });
  fireEvent.click(screen.getByTestId(/next/i));
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/quiz", {
    state: { gender: "Male", name: "Test", selectedLanguage: "English" },
  });
});
