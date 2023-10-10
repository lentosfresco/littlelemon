import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";

describe("Nav Component", () => {
  it("should render Nav component with logo, menu items, and menu toggle", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText("logo");
    expect(logo).toBeCalled();

    // Check if menu items are rendered
    const menuItems = screen.getAllByRole("link");
    expect(menuItems).toHaveLength(6);
    expect(menuItems[0]).toHaveProperty("Home");
    expect(menuItems[1]).toHaveProperty("About");
    expect(menuItems[2]).toHaveProperty("Menu");
    expect(menuItems[3]).toHaveProperty("Reservations");
    expect(menuItems[4]).toHaveProperty("Order Online");
    expect(menuItems[5]).toHaveProperty("Login");

    // Check if menu toggle icon is rendered
    const menuToggleIcon = screen.getByAltText("menu-icon");
    expect(menuToggleIcon).toBeCalled();
  });

  it("should toggle menu when menu toggle icon is clicked", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check if the menu is initially closed
    const menu = screen.getByTestId("menu-list");
    expect(menu).not.toHaveProperty("open");

    // Click the menu toggle icon
    const menuToggleIcon = screen.getByAltText("menu-icon");
    fireEvent.click(menuToggleIcon);

    // Check if the menu is open after clicking
    expect(menu).toHaveProperty("open");

    // Click the menu toggle icon again
    fireEvent.click(menuToggleIcon);

    // Check if the menu is closed after clicking again
    expect(menu).not.toHaveProperty("open");
  });
});
