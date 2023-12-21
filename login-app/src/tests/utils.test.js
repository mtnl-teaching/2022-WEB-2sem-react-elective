import { validateEmail } from "../utils/validateSignUpInfo";

test("Testing utility functions: validate email", () => {
  expect(validateEmail("")).toBe("N @ present");

  expect(validateEmail("mtnl@@cphbusiness.dk")).toBe("Only 1 @ is allowed");

  expect(validateEmail("@cphbusiness.dk")).toBe(
    "The local email part is empty"
  );

  expect(validateEmail("mtnl@cphbusiness")).toBe(
    "Wrong domain, domain must be 'cphbusiness.dk'"
  );
});
