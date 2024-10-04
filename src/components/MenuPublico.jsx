import { NavLink, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MenuPublico = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-public">
        <Container>
          <NavLink exact="true" to="/" className="navbar-brand">
            Página Inicial
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact="true" to="/login" className="nav-link">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default MenuPublico;
