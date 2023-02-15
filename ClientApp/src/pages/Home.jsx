import { Button } from "react-bootstrap";
import Layout from "./Layout";

function Home() {
  const user = sessionStorage.getItem("user");

  function logout(e) {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <h1>Hello, {user}</h1>
      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}

export default Home;
