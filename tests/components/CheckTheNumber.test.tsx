import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import CheckTheNumber from "../../src/components/CheckTheNumber";
import userEvent from "@testing-library/user-event";

describe("CheckTheNumber Components", () => {
  const renderComponents = () => {
    render(<CheckTheNumber />);

    return {
      input: screen.getByPlaceholderText(/number/i),
      submitButton: screen.getByRole("button", { name: /submit/i }),
    };
  };
  it("should render correctly", () => {
    const { input, submitButton } = renderComponents();

    expect(input).toHaveFocus();
    expect(input).toHaveValue(0);
    expect(submitButton).toBeDisabled();
  });
  it.each([
    { senario: "even", value: 2, message: /even/i },
    { senario: "odd", value: 1, message: /odd/i }
  ])(
    "should show toast  the is $senario  when user enter $value",
    async ({ message, value }) => {
      const { input, submitButton } = renderComponents();

      const user = userEvent.setup();
      await user.type(input, value.toString());
      await user.click(submitButton);

      expect(screen.queryByText(message)).toBeInTheDocument();
    }
  );
});
