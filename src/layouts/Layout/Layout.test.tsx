import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

describe("Layout Component", () => {
  it("should render Layout component with Nav, main, and Footer", () => {
    render(<Layout>Test Content</Layout>);

    // Check if the Nav component is rendered
    expect(screen.getByTestId("nav")).toBeCalled();

    // Check if the main content is rendered
    expect(screen.getByTestId("main")).toBeCalled();
    expect(screen.getByText("Test Content")).toBeCalled();

    // Check if the Footer component is rendered
    expect(screen.getByTestId("footer")).toBeCalled();
  });

  it("should render children content within the main section", () => {
    render(<Layout>Child Content</Layout>);

    // Check if the child content is rendered within the main section
    expect(screen.getByTestId("main")).toHaveProperty("Child Content");
  });

  it("should render Nav and Footer components", () => {
    render(<Layout>Test Content</Layout>);

    // Check if the Nav component is rendered
    expect(screen.getByTestId("nav")).toBeCalled();

    // Check if the Footer component is rendered
    expect(screen.getByTestId("footer")).toBeCalled();
  });
});
