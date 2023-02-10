import axios from "axios";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function Login() {
  const loginAPI = "http://localhost:5134";
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      axios
        .post(`${loginAPI}/api/Auth/login`, values)
        .then((res) => {
          const data = res.data;
          const token = data.token;
          if (!token) {
            alert("Unable to login.");
            return;
          }
          sessionStorage.clear();
          sessionStorage.setItem("user-token", token);
          setTimeout(() => {
            navigate("/");
          }, 500);
        })
        .catch((err) => {
          alert(`Oops! Something went wrong: ${err.response.data.message}`);
        });
    },
  });

  const submitLoginForm = (e) => {
    e.preventDefault();
    const formElement = document.querySelector("#login-form");
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const btnPointer = document.querySelector("#login-btn");
    btnPointer.innerHTML = "Please wait..";
    btnPointer.disabled = true;
    //btnPointer.setAttribute('disabled', true);
    axios
      .post(`${loginAPI}/api/Auth/login`, formDataJSON)
      .then((res) => {
        btnPointer.innerHTML = "Login";
        btnPointer.disabled = false;
        const data = res.data;
        const token = data.token;
        if (!token) {
          alert("Unable to login.");
          return;
        }
        sessionStorage.clear();
        sessionStorage.setItem("user-token", token);
        setTimeout(() => {
          navigate("/contact");
        }, 500);
      })
      .catch((err) => {
        btnPointer.innerHTML = "Login";
        btnPointer.disabled = false;
        alert(`Oops! Something went wrong: ${err.response.data.message}`);
      });
  };

  return (
    <>
      <Container className="my-5">
        <h2 className="fw-normal mb-5">Login</h2>
        <Row>
          <Col md={{ span: 6 }}>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="form-control"
                  required
                />
              </FormGroup>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
