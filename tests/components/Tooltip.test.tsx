import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "../../src/components/Tooltip";
import { FaLink } from "react-icons/fa";

describe("Tooltip Components", () => {
  const title = "Hover Me";
  const tipMessage = "Great";

  it("should render with default value", () => {
    render(<Tooltip tooltipText={tipMessage}>{title}</Tooltip>);

    const button = screen.getByRole("button", { name: title });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(title);
    expect(screen.queryByLabelText("tooltip-text")).not.toBeInTheDocument();
  });

  it("should show the tip message when user hover the button", async () => {
    render(<Tooltip tooltipText={tipMessage}>{title}</Tooltip>);

    const button = screen.getByRole("button", { name: title });
    const user = userEvent.setup();
    await user.hover(button);

    expect(screen.getByLabelText("tooltip-text")).toBeInTheDocument();
  });

  it("should render the with icon", () => {
    render(
      <Tooltip tooltipText={tipMessage}>
        <FaLink data-testid="svg"/>
      </Tooltip>
    );

    expect(screen.getByTestId('svg')).toBeInTheDocument()
  });
});
