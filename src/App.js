import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import LoggedInUser from "./PrivateRoute/isLoggedIn";
import NotLoggedInUser from "./PrivateRoute/isNotLoggedIn";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUser />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route element={<NotLoggedInUser />}>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
