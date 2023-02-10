import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Boxes } from "react-bootstrap-icons";

function Navigation() {
  return (
    <>
      <div className="shadow-sm sidebar">
        <div className="  border">
          <Link
            to={`/`}
            className="text-decoration-none text-black fw-semibold"
          >
            <span className="fs-3 text-decoration-none">Site title</span>
          </Link>
        </div>
        <div>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>
              <Link to={`contact`}>
                <Boxes color="gray" size={28} className="mx-2" />
              </Link>
            </Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
