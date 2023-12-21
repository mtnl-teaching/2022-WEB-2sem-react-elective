import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import MyAltButton from "../components/shared/MyAltButton";

test("Render and execute onClick on MyAltButton", () => {
  // Arrange
  const mockFunction = jest.fn();
  render(<MyAltButton text={"This is a test"} onClick={mockFunction} />);

  // Act
  act(() => {
    // container.querySelector("h3").click();
    expect(screen.getByText("This is a test")).toBeInTheDocument();
    fireEvent.click(screen.getByText("This is a test"));
  });

  // Assert
  expect(mockFunction).toBeCalledTimes(1);
});
