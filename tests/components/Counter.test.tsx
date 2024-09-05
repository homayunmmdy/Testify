import React from "react"
import { render, screen } from "@testing-library/react";
import Counter from "../../src/components/Counter";
import {userEvent} from "@testing-library/user-event"

describe("Counter Components", () => {
  const componentsHelper = () => {
    render(<Counter />);

    return {
      decressBtn: screen.getByRole("button", { name: /decress/i }),
      incressBtn: screen.getByRole("button", { name: /incress/i }),
    };
  };

  it("should render the default counter", () => {
    const { decressBtn, incressBtn } = componentsHelper();

    expect(screen.getByText(/counter : 0/i)).toBeInTheDocument();
    expect(incressBtn).toBeInTheDocument();
    expect(decressBtn).toBeInTheDocument();
    expect(decressBtn).toBeDisabled();
  });

  it('should incress the counter when user click incress button',async () => {
    const {incressBtn} = componentsHelper();

    const user = userEvent.setup()
    await user.click(incressBtn);

    expect(screen.getByText(/counter : 1/i)).toBeInTheDocument();
  });

  it('should decress the counter when user click decress button',async () => {
    const {incressBtn ,decressBtn} = componentsHelper();

    const user = userEvent.setup()
    await user.click(incressBtn);
    await user.click(incressBtn);
    await user.click(decressBtn);

    expect(screen.getByText(/counter : 1/i)).toBeInTheDocument();
  });

  it('should not change the value when user click decress when counter is zero',async () => {
    const {decressBtn} = componentsHelper();

    const user = userEvent.setup()
    await user.click(decressBtn);

    expect(decressBtn).toBeDisabled();
    expect(screen.getByText(/counter : 0/i)).toBeInTheDocument();
  })
});
