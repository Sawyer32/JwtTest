import { Nav } from "react-bootstrap";

function Sidenav() {
  return (
    <Nav defaultActiveKey="#home" className="flex-column">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#settings">Settings</Nav.Link>
    </Nav>
  );
}

export default Sidenav;
