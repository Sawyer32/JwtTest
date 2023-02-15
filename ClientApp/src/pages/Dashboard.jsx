import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Sidenav from "../components/Sidenav";
import axios from "axios";
import { useFormik } from "formik";
import jwt from "jwt-decode";

function Dashboard() {
  const token = sessionStorage.getItem("token");
  const decoded = jwt(token, { payload: true });
  const userEmail = decoded.email;
  const userName = decoded.name;
  console.log();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:5000/api/auth/register", values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <Navigation />
      <div className="vh-100 ">
        <Container>
          <div className="vh-100 d-flex flex-column justify-content-center">
            <Row className="h-75 shadow">
              <Col lg={3} className="border-end">
                <div className="text-center">
                  <h1>Dashboard</h1>
                </div>
                <div className="shadow-sm">
                  <Sidenav />
                </div>
              </Col>
              <Col lg={9} className="h-full border">
                <div className="h-100">
                  <Row className="">
                    <Form onSubmit={formik.handleSubmit}>
                      <FormGroup className="d-flex flex-row align-items-center">
                        <Row className="w-100">
                          <Col lg={6}>
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder={userName}
                              onChange={formik.handleChange}
                              value={formik.values.name}
                              className="form-control"
                            />
                          </Col>
                          <Col lg={6}>
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder={userEmail}
                              onChange={formik.handleChange}
                              value={userEmail}
                              className="form-control"
                              disabled={true}
                              readOnly={true}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row className="w-100">
                          <Col lg={6}>
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder=""
                              onChange={formik.handleChange}
                              value={userEmail}
                              className="form-control"
                              disabled={true}
                              readOnly={true}
                            />
                          </Col>
                          <Col lg={6}>
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                              onChange={formik.handleChange}
                              value={formik.values.password}
                              className="form-control"
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup></FormGroup>
                    </Form>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
