import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import pages from "./pages/pages";
import Layout from "./layouts/Layout/Layout";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Reservations from "./pages/Reservations/Reservations";

const App: React.FC = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your entire app with Router */}
      <div data-testid="app-component">
        <Layout>
          <Routes>
            <Route path={pages.get("home")!.path} element={<Home />} />
            <Route path={pages.get("about")!.path} element={<About />} />
            <Route path={pages.get("menu")!.path} element={<Menu />} />
            <Route
              path={pages.get("reservations")!.path}
              element={<Reservations />}
            />
            <Route path={pages.get("orders")!.path} element={<Orders />} />
            <Route path={pages.get("login")!.path} element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
