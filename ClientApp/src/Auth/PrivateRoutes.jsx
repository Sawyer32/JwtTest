import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function PrivateRoutes() {
  let auth = { token: sessionStorage.getItem("token") };

  let decodedToken = jwt_decode(auth.token);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}
