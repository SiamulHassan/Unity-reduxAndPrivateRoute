import React, { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { signUp } from "../../Validation/validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("text");
  const db = getDatabase();
  const auth = getAuth();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUp,
    onSubmit() {
      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      ).then(({ user }) => {
        console.log(user);
        set(ref(db, "users/" + user.uid), {
          email: user.email,
        });
      });
      navigate("/login");
    },
  });
  return (
    <>
      <div className="auth_background">
        <div className="devider_left">
          <div className="auth_bg_container registration-bg--modify"></div>
        </div>
        <div className="devider_right">
          <div className="registration">
            <h3 className="registration_heading">Register</h3>
            <p className="reg_title">Come on and crate an account</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-block">
                <TextField
                  label="Full Name"
                  variant="standard"
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input_width"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#11024ef6",
                    },
                    "& .MuiInput-root:after": {
                      borderBottom: "2px solid #11024ef6",
                    },
                  }}
                />
                {formik.errors.fullName && formik.touched.fullName ? (
                  <p className="error">{formik.errors.fullName}</p>
                ) : null}
              </div>
              <div className="input-block">
                <TextField
                  label="Email"
                  variant="standard"
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input_width"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#11024ef6",
                    },
                    "& .MuiInput-root:after": {
                      borderBottom: "2px solid #11024ef6",
                    },
                  }}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="input-block">
                <TextField
                  label="Password"
                  variant="standard"
                  type={password}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input_width"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#11024ef6",
                    },
                    "& .MuiInput-root:after": {
                      borderBottom: "2px solid #11024ef6",
                    },
                  }}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="input-block">
                <TextField
                  label="Confirm Password"
                  variant="standard"
                  type={password}
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input_width"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#11024ef6",
                    },
                    "& .MuiInput-root:after": {
                      borderBottom: "2px solid #11024ef6",
                    },
                  }}
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <p className="error">{formik.errors.confirmPassword}</p>
                ) : null}
              </div>
              <div className="member">
                <p>
                  Already a member ?
                  <strong>
                    <Link to="/login">Sign In</Link>
                  </strong>
                </p>
              </div>
              <Button
                type="submit"
                variant="contained"
                className="registration_btn"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
