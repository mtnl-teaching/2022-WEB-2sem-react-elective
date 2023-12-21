import { render, screen } from "@testing-library/react";
import App from "./App";
import { emailValidation } from "./utility/email-validation";

test("email validation method", () => {
  const thisShouldFail = emailValidation("mtnl");
  expect(thisShouldFail).toBe(false);

  const thisShouldBeOk = emailValidation("mtnl@cphbusiness.dk");
  expect(thisShouldBeOk).toBe(true);
});
