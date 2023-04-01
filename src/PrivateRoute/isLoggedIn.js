import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Login from "../Pages/Login";

export default function LoggedInUser() {
  const currentUser = useSelector((users) => users.login.login);
  return currentUser ? <Outlet /> : <Login />;
}
