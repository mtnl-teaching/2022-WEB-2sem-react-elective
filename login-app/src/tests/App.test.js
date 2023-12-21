import { render, screen } from "@testing-library/react";
import App from "../App";

test("default render", () => {
  render(<App />);
  expect(screen.getByText("Log onto Appster 2000")).toBeInTheDocument();
});

const emailString = "myMail@cphbusiness.dk";
const isValid = emailString.includes("cphbusiness.dk");
