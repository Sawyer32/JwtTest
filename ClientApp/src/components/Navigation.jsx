import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import jwt_decode from "jwt-decode";

function Navigation() {
  const token = sessionStorage.getItem("token");
  const decoded = jwt_decode(token);
  const userName = decoded.name;

  function logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <Navbar bg="light" className="shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand>JWTTEST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {token ? (
              <NavDropdown title={userName} id="basic-nav-dropdown">
                <Nav.Link href="/login" onClick={logout}>
                  Logout
                </Nav.Link>
              </NavDropdown>
            ) : (
              <NavDropdown title="Username" id="basic-nav-dropdown">
                <Nav.Link href="/login" onClick={logout}>
                  Logout
                </Nav.Link>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
