import React from "react";
import { render, screen } from "@testing-library/react";
import CommentsList from "../../src/components/CommentsList";
import userEvent from "@testing-library/user-event";

describe("CommentList Components", () => {
  const renderComponents = () => {
    render(<CommentsList />);

    return {
      getComments: () => screen.queryAllByTestId("comments"),
      button: screen.getByRole("button", { name: /more/i }),
      user: userEvent.setup(),
    };
  };
  it("should render 5 comments as default", () => {
    const { getComments, button } = renderComponents();

    expect(getComments()).toHaveLength(5);
    expect(button).toBeInTheDocument();
  });

  it("should render 10 comments when user click show more button", async () => {
    const { getComments, button, user } = renderComponents();

    await user.click(button);

    expect(getComments()).toHaveLength(10);
    expect(button).toBeInTheDocument();
  });

  it("should hide the show more button if there is no more comments", async () => {
    const { getComments, button, user } = renderComponents();

    await user.click(button);
    await user.click(button);

    expect(getComments()).toHaveLength(12);
    expect(button).not.toBeInTheDocument();
  });
});
