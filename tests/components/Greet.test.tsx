  import React from "react";
import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greet Components", () => {
  const componetnsHelper = () => {
    render(<Greet />);

    return {
      input: screen.getByPlaceholderText(/name/i),
      submitBtn: screen.getByRole("button", { name: /submit/i }),
      user: userEvent.setup(),
    };
  };

  it("should render the defualt correctly", () => {
    const { input, submitBtn } = componetnsHelper();

    expect(input).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });

  it("should make the button enabled when user type something", async () => {
    const { input, submitBtn, user } = componetnsHelper();

    await user.type(input, "John");

    expect(submitBtn).toBeEnabled();
  });

  it("should show user name on toast when user submit their name", async () => {
    const { input, submitBtn, user } = componetnsHelper();

    await user.type(input, "John");
    await user.click(submitBtn);

    expect(screen.getByText("Hi John")).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
    expect(input).toHaveValue("");
  });

  it("should focus on Input when the page is loaded", () => {
    const { input } = componetnsHelper();

    expect(input).toHaveFocus();
  });
});
