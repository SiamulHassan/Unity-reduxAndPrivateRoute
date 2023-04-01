import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { logIn, signUp } from "../../Validation/validation";
import "./style.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
// icons
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../Slice/loginSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("text");
  const auth = getAuth();
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: logIn,
    onSubmit() {
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      ).then(({ user }) => {
        // Signed in

        dispatch(loginReducer(user));
        localStorage.setItem("unityLogin", JSON.stringify(user));
        // console.log("loggedInUser:", user);
      });
      navigate("/");
    },
  });
  return (
    <>
      <div className="auth_background">
        <div className="devider_left">
          <div className="auth_bg_container login-bg--modify">
            <div className="overlay">
              <div className="overlay_items">
                <h2>WELCOME</h2>
                <h2 className="back">BACK .</h2>
                <p className="title">Begin you journey with awesome firends</p>
                <p className="continue">Continue with social media</p>
                <div className="social_media">
                  <div className="fb_box">
                    <SiFacebook />
                  </div>
                  <div className="twitter_box">
                    <AiFillTwitterCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="devider_right">
          <div className="login_container">
            <div className="login_heading">
              <h2>Login</h2>
              <p className="heaing_title">
                Don't have an account?{" "}
                <Link to="/registration" className="crateAccount">
                  Create Your Account,
                </Link>{" "}
                It takes less than a minute
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="form">
              <div className="input-block--login">
                <TextField
                  label="Email"
                  variant="standard"
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input_width"
                  margin="dense"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#11024ef6" },
                    "& .MuiInput-root:after": {
                      borderBottom: "2px solid #11024ef6",
                    },
                  }}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="input-block--login">
                <TextField
                  label="Password"
                  variant="standard"
                  type={password}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input_width"
                  margin="dense"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#11024ef6" },
                    "& .MuiInput-root:after": {
                      borderBottom: "2px solid #11024ef6",
                    },
                  }}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="forget">
                <p>Forget Password</p>
              </div>
              <Button type="submit" variant="contained" className="login_btn">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
