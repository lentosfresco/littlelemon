import React, { ReactNode } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main data-testid="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
