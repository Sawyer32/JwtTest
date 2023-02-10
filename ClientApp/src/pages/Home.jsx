import { Alert } from "react-bootstrap";

function Home() {
  if (sessionStorage.getItem("user-token") !== null) {
    return (
      <>
        <div>
          <h1>Home</h1>
        </div>
      </>
    );
  } else {
    return <Alert variant="danger">Please login first</Alert>;
  }
}

export default Home;
