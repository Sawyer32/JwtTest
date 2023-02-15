import axios from "axios";
import { Button, Form, FormGroup, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function Register() {
  const apiURL = "http://localhost:5134";
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(`${apiURL}/api/Auth/register`, values)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <Container className="">
      <Row className="vh-100 ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="shadow p-4 w-25 d-flex flex-column justify-content-center">
            <div className="text-center mb-4">
              <span className="fw-bold fs-2">Register</span>
            </div>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                {/*<FormLabel htmlFor="email">Email</FormLabel>*/}
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  className="form-control mb-4 border py-2"
                  required
                />
              </FormGroup>
              <FormGroup>
                {/*<FormLabel htmlFor="email">Email</FormLabel>*/}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="form-control mb-4 border py-2"
                  required
                />
              </FormGroup>
              <FormGroup>
                {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="form-control border py-2"
                  required
                />
              </FormGroup>
              <div className="mt-4">
                <Button variant="secondary" type="submit" className="w-100">
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Register;
