import React from "react";
import { render, screen } from "@testing-library/react";
import CarList from "../../src/components/CarList";
import userEvent from "@testing-library/user-event";

describe("CarList Components", () => {
  const componentHelper = () => {
    render(<CarList />);

    return {
      searchInput: screen.getByPlaceholderText(/search/i),
    };
  };
  it("should render all cars as default", () => {
    const { searchInput } = componentHelper();

    expect(searchInput).toBeInTheDocument();
    expect(screen.getByText(/mercedes/i)).toBeInTheDocument();
    expect(screen.getByText(/mclaren/i)).toBeInTheDocument();
  });
  
  it("should filter the cars based on user input",async () => {
    const { searchInput } = componentHelper();

    expect(screen.getByText(/mercedes/i)).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(searchInput, 'Tesla');

    expect(screen.getByText(/tesla/i)).toBeInTheDocument();
    expect(screen.queryByText(/mercedes/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/mclaren/i)).not.toBeInTheDocument();

  });

  it('should return not found when there is no match',async () => {
    const { searchInput } = componentHelper();

    const user = userEvent.setup();
    await user.type(searchInput, 'Invalid Car');

    expect(screen.getByText(/not found/i)).toBeInTheDocument()
  });

  it('should focus on search input when page is loaded', () => {
    const { searchInput } = componentHelper();

    expect(searchInput).toHaveFocus()
  });
});
