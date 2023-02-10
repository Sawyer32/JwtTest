import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ListGroup } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <main>
        <div className="row vh-100">
          <div className="col-3">
            <Navigation />
          </div>
          <div className="col-8">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
