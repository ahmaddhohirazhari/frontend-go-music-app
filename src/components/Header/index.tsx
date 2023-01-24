import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { Container, Button, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="my-2 shadow">
      <Container>
        <Navbar.Brand href="/">
          <h2>Music</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={"justify-content-end"}
        >
          <>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link link_header">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/manage-event" className="nav-link link_header">
                  Create Music
                </Link>
              </li>
            </ul>
            <Button
              variant="light"
              className="color-purple border-purple me-3 fw-bold"
            >
              Masuk
            </Button>

            <Button
              className="text-white background-purple border-purple fw-bold"
              style={{ backgroundColor: "#5e50a1" }}
            >
              Daftar
            </Button>
          </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
