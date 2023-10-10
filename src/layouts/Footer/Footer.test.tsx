import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer Component", () => {
  it("should render Footer component with navigation links and icons", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Check if the Home link and icon are rendered
    expect(screen.getByText("Home")).toBeCalled();
    expect(screen.getByTestId("home-icon")).toBeCalled();

    // Check if the About link and icon are rendered
    expect(screen.getByText("About")).toBeCalled();
    expect(screen.getByTestId("about-icon")).toBeCalled();

    // Check if the Menu link and icon are rendered
    expect(screen.getByText("Menu")).toBeCalled();
    expect(screen.getByTestId("menu-icon")).toBeCalled();

    // Check if the Reservations link and icon are rendered
    expect(screen.getByText("Reservations")).toBeCalled();
    expect(screen.getByTestId("reservations-icon")).toBeCalled();

    // Check if the Order Online link and icon are rendered
    expect(screen.getByText("Order Online")).toBeCalled();
    expect(screen.getByTestId("order-online-icon")).toBeCalled();

    // Check if the Login link and icon are rendered
    expect(screen.getByText("Login")).toBeCalled();
    expect(screen.getByTestId("login-icon")).toBeCalled();
  });

  it("should render Footer component with contact information and icons", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Check if the address and icon are rendered
    expect(screen.getByText("1 Little Lemon Square")).toBeCalled();
    expect(screen.getByTestId("address-icon")).toBeCalled();

    // Check if the phone number and icon are rendered
    expect(screen.getByText("1 888-888-8888")).toBeCalled();
    expect(screen.getByTestId("phone-icon")).toBeCalled();

    // Check if the email and icon are rendered
    expect(screen.getByText("info@littlelemon.com")).toBeCalled();
    expect(screen.getByTestId("email-icon")).toBeCalled();
  });

  it("should render Footer component with social media links and icons", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Check if the Facebook link and icon are rendered
    expect(screen.getByText("Facebook")).toBeCalled();
    expect(screen.getByTestId("facebook-icon")).toBeCalled();

    // Check if the Instagram link and icon are rendered
    expect(screen.getByText("Instagram")).toBeCalled();
    expect(screen.getByTestId("instagram-icon")).toBeCalled();

    // Check if the Twitter link and icon are rendered
    expect(screen.getByText("Twitter")).toBeCalled();
    expect(screen.getByTestId("twitter-icon")).toBeCalled();
  });
});
