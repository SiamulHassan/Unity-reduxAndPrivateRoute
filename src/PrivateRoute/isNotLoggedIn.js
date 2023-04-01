import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function NotLoggedInUser() {
  const currentUser = useSelector((users) => users.login.login);
  return currentUser ? <Navigate to="/" /> : <Outlet />;
}
