import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import GuessNumber from "../../src/components/GuessNumber";
import userEvent from "@testing-library/user-event";

describe("GuessNumber Components", () => {
  it("should render correctly", () => {
    const { input, submitButton, getOverButton } = renderComponent();

    expect(screen.getByRole("heading", { name: /guess/i })).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveFocus();
    expect(getOverButton()).not.toBeInTheDocument();
  });

  it("should show toast when the guess is lower than random number", async () => {
    const { guessTheNumber } = renderComponent();

    await guessTheNumber(20);

    expect(screen.getByText(/greater/i)).toBeInTheDocument();
  });

  it("should show toast when the guess is greater than random number", async () => {
    const { guessTheNumber } = renderComponent();

    await guessTheNumber(30);

    expect(screen.getByText(/smaller/i)).toBeInTheDocument();
  });

  it("should show success when the guess is correct", async () => {
    const { guessTheNumber } = renderComponent();

    await guessTheNumber(28);

    expect(screen.getByText(/guessed/i)).toBeInTheDocument();
  });

  it("should show game over after 3 wrong attemps and render correcttly", async () => {
    const { guessTheNumber, input, submitButton, getOverButton } =
      renderComponent();

    await guessTheNumber(1);
    await guessTheNumber(2);
    await guessTheNumber(3);

    const againMessage = screen.queryByText(/again/i);

    expect(againMessage).toBeInTheDocument();
    expect(input).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });

  const renderComponent = () => {
    render(<GuessNumber />);
    global.Math.random = () => 28 / 100;

    const input = screen.getByPlaceholderText(/guess/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const getOverButton = () => screen.queryByRole("button", { name: /over/ });
    const user = userEvent.setup();

    const guessTheNumber = async (number: number) => {
      await user.type(input, number.toString());
      await user.click(submitButton);
    };

    return {
      input,
      user,
      submitButton,
      getOverButton,
      guessTheNumber,
    };
  };
});
