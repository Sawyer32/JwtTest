import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};
